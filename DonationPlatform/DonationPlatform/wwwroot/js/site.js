// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function MyAction() {
    console.log("JS CALL");
}

async function ethEnabled() {
    if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        return true;
    }
    return false;
}

async function getContract() {

    await ethEnabled();
    var web3 = window.web3;

    try {

        var MyIdoContract = new web3.eth.Contract(
            DoChaintion.abi,
            DoChaintion.networks[4].address
        );
        
        return MyIdoContract;
    }
    catch (error) {
        console.log("error " + error);
    }
}

async function donateToProject(number) {

    var contract = await getContract();
    var accounts = await web3.eth.getAccounts();

    amountDonate = parseFloat(document.getElementById('amountToDonate').value) * 1000000000000000000;

    let donateCallToContract = await contract.methods.fundProject(number).send({ from: accounts[0], value: amountDonate })
        .then(result => { return result })
        .catch(err => console.log(err));

    document.getElementById('message-for-donate').innerText = 'Successvol gedoneerd';

    loadDetailsPage(number);

} 

async function loadDetailsPage(number) {
    var contract = await getContract();
    var accounts = await web3.eth.getAccounts();

    var project = await contract.methods.getProject(number)
        .call()
        .then(result => { return result })
        .catch(err => console.log(err));

    if (project === undefined) {
        window.location.href = '/project/notFound';
    }

    document.getElementById('project-name').innerText = project.projectName;
    document.getElementById('project-description').innerText = project.description;
    document.getElementById('photo').src = `https://ipfs.io/ipfs/${project.photoCid}`;
    document.getElementById('organisation').innerText = project.name;
    document.getElementById('donation').innerText = project.totalDonation / 1000000000000000000 + " ETH";
}

async function makeDonateProject() {
    var contract = await getContract();
    var accounts = await web3.eth.getAccounts();

    var _projectAddress = document.getElementById("_projectAddress").value;
    var _name = document.getElementById("_name").value;
    var _description = document.getElementById("_description").value;
    var _organisation = document.getElementById("_organisation").value;
    var _photoCID = document.getElementById("_photoCID").value;

    let makeProjectCall = await contract.methods.makeProject(_projectAddress, _name, _organisation, _description, _photoCID)
        .send({ from: accounts[0] })
        .then(result => {
            document.getElementById('message').innerText = "Success"
        })
        .catch(err => console.log(err));
}

async function getAllProjectsOfContract() {
    var contract = await getContract();
    var accounts = await web3.eth.getAccounts();

    let makeProjectCall = await contract.methods.getAllProjects()
        .call()
        .then(result => { return result })
        .catch(err => console.log(err));
}

async function getAllDonationsOfContract() {
    var contract = await getContract();
    var accounts = await web3.eth.getAccounts();

    let makeProjectCall = await contract.methods.getAllDonations()
        .call()
        .then(result => { return result })
        .catch(err => console.log(err));

    return makeProjectCall;
}