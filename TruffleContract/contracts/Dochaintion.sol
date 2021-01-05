// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

contract Dochaintion {
    //Structs
    struct Project {
      uint projectId;
      address projectAddress;
      string name;
      string description;
      uint totalDonation;
    } 

    struct Donation {
      address donator;
      uint amount;
      address projectAddress;
    }

    //Arrays
    Project[] projectsList;
    Donation[] donationsList;

    //Mappings
    mapping(address => Project[]) founderToProject;
    mapping(uint => Project) idToProject;

    //Events
    event projectMade(address founder, Project madeProject);
    event donationMade(Donation donation);

    //Project creation
    function makeProject(address _projectAddress, string memory _name, string memory _description) public {

      //Get latest number for project id.
      uint currentLatestProjectNumber = projectsList.length;

      //Make project with given information
      Project memory newProject = Project(currentLatestProjectNumber, _projectAddress, _name, _description,0);

      //Save the project for lookup
      projectsList.push(newProject);
      founderToProject[msg.sender].push(newProject);
      idToProject[currentLatestProjectNumber] = newProject;

      //Event
      emit projectMade(msg.sender, newProject);
    }

    function fundProject(uint chosenProjectId) public payable {
      //Check if ETH amount is send and a project is found
      require(msg.value > 0, "No ETH sended for fund");
      require(chosenProjectId >= 0, "No project found");

      //check if call succeeded go further
      (bool success, ) = idToProject[chosenProjectId].projectAddress.call{value : msg.value}('');
      require(success);
      
      //Save donation in chain
      Donation memory madeDonation = Donation(msg.sender,msg.value,idToProject[chosenProjectId].projectAddress);
      donationsList.push(madeDonation);

      //Event it
      emit donationMade(madeDonation);
    }

    function getAllProjects() public view returns(Project[] memory) {
      return projectsList;
    }

    function getAllDonations() public view returns(Donation[] memory) {
      return donationsList;
    }

}
