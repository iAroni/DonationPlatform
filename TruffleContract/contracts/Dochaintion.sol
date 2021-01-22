// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Dochaintion is AccessControl {
    //Structs
    struct Project {
        uint256 projectId;
        address projectAddress;
        string projectName;
        string name;
        string description;
        string photoCid;
        uint256 totalDonation;
        bool isActive;
    }

    struct Donation {
        address donator;
        uint256 amount;
        address projectAddress;
        string projectName;
        uint256 date;
    }

    //Arrays
    Project[] projectsList;
    Donation[] donationsList;

    //Mappings
    mapping(address => Project[]) founderToProject;
    mapping(uint256 => Project) idToProject;

    //Events
    event projectMade(address founder, Project madeProject);
    event donationMade(Donation donation);

    //Rolls
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");

    //Constructor
    constructor(address owner1, address owner2) public {
        _setupRole(OWNER_ROLE, owner1);
        _setupRole(OWNER_ROLE, owner2);
    }

    //Project creation
    function makeProject(
        address _projectAddress,
        string memory _projectName,
        string memory _name,
        string memory _description,
        string memory _photoCid
    ) public {
        require(hasRole(OWNER_ROLE, msg.sender), "Caller is not the owner");
        //Get latest number for project id.
        uint256 currentLatestProjectNumber = projectsList.length;

        //Make project with given information
        Project memory newProject =
            Project(
                currentLatestProjectNumber,
                _projectAddress,
                _projectName,
                _name,
                _description,
                _photoCid,
                0,
                true
            );

        //Save the project for lookup
        projectsList.push(newProject);
        founderToProject[msg.sender].push(newProject);
        idToProject[currentLatestProjectNumber] = newProject;

        //Event
        emit projectMade(msg.sender, newProject);
    }

    function fundProject(uint256 chosenProjectId) public payable {
        //Check if ETH amount is send and a project is found
        require(msg.value > 0, "No ETH sended for fund");
        require(chosenProjectId >= 0, "No project found");

        //check if call succeeded go further
        (bool success, ) =
            idToProject[chosenProjectId].projectAddress.call{value: msg.value}(
                ""
            );
        require(success, "Transfer was not succesfull");

        idToProject[chosenProjectId].totalDonation += msg.value;
        projectsList[chosenProjectId].totalDonation += msg.value;

        //Save donation in chain
        Donation memory madeDonation =
            Donation(
                msg.sender,
                msg.value,
                idToProject[chosenProjectId].projectAddress,
                idToProject[chosenProjectId].projectName,
                block.timestamp
            );
        donationsList.push(madeDonation);

        //Event it
        emit donationMade(madeDonation);
    }

    function getAllProjects() public view returns (Project[] memory) {
        return projectsList;
    }

    function getProject(uint256 number) public view returns (Project memory) {
        require(projectsList[number].isActive, " This project is inactive");

        return projectsList[number];
    }

    function getAllDonations() public view returns (Donation[] memory) {
        return donationsList;
    }

    function deactiveProject(uint256 number) public {
        require(hasRole(OWNER_ROLE, msg.sender), "Caller is not the owner");
        address caller = msg.sender;
        projectsList[number].isActive = false;
        for (uint256 i = 0; i < founderToProject[msg.sender].length; i++) {
            if (founderToProject[caller][i].projectId == number) {
                founderToProject[caller][i].isActive = false;
            }
        }
        idToProject[number].isActive = false;
    }

    function activateProject(uint256 number) public {
        require(hasRole(OWNER_ROLE, msg.sender), "Caller is not the owner");
        address caller = msg.sender;
        projectsList[number].isActive = true;
        for (uint256 i = 0; i < founderToProject[msg.sender].length; i++) {
            if (founderToProject[caller][i].projectId == number) {
                founderToProject[caller][i].isActive = true;
            }
        }
        idToProject[number].isActive = true;
    }
}
