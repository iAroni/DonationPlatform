var DoChaintion = {
    "contractName": "Dochaintion",
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "previousAdminRole",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "newAdminRole",
                    "type": "bytes32"
                }
            ],
            "name": "RoleAdminChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "RoleGranted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "RoleRevoked",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "donator",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "projectAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "projectName",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "date",
                            "type": "uint256"
                        }
                    ],
                    "indexed": false,
                    "internalType": "struct Dochaintion.Donation",
                    "name": "donation",
                    "type": "tuple"
                }
            ],
            "name": "donationMade",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "founder",
                    "type": "address"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "projectId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "projectAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "projectName",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "description",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "photoCid",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "totalDonation",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "isActive",
                            "type": "bool"
                        }
                    ],
                    "indexed": false,
                    "internalType": "struct Dochaintion.Project",
                    "name": "madeProject",
                    "type": "tuple"
                }
            ],
            "name": "projectMade",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "DEFAULT_ADMIN_ROLE",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [],
            "name": "OWNER_ROLE",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                }
            ],
            "name": "getRoleAdmin",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "getRoleMember",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                }
            ],
            "name": "getRoleMemberCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "grantRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "hasRole",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "renounceRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "revokeRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_projectAddress",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_projectName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_description",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_photoCid",
                    "type": "string"
                }
            ],
            "name": "makeProject",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "chosenProjectId",
                    "type": "uint256"
                }
            ],
            "name": "fundProject",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function",
            "payable": true
        },
        {
            "inputs": [],
            "name": "getAllProjects",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "projectId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "projectAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "projectName",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "description",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "photoCid",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "totalDonation",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "isActive",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct Dochaintion.Project[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "number",
                    "type": "uint256"
                }
            ],
            "name": "getProject",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "projectId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "projectAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "projectName",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "description",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "photoCid",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "totalDonation",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "isActive",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct Dochaintion.Project",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [],
            "name": "getAllDonations",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "donator",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "projectAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "projectName",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "date",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Dochaintion.Donation[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "number",
                    "type": "uint256"
                }
            ],
            "name": "deactiveProject",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "number",
                    "type": "uint256"
                }
            ],
            "name": "activateProject",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"donator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"projectAddress\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"projectName\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"date\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct Dochaintion.Donation\",\"name\":\"donation\",\"type\":\"tuple\"}],\"name\":\"donationMade\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"founder\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"projectAddress\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"projectName\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"photoCid\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"totalDonation\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isActive\",\"type\":\"bool\"}],\"indexed\":false,\"internalType\":\"struct Dochaintion.Project\",\"name\":\"madeProject\",\"type\":\"tuple\"}],\"name\":\"projectMade\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"OWNER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"number\",\"type\":\"uint256\"}],\"name\":\"activateProject\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"number\",\"type\":\"uint256\"}],\"name\":\"deactiveProject\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"chosenProjectId\",\"type\":\"uint256\"}],\"name\":\"fundProject\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getAllDonations\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"donator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"projectAddress\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"projectName\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"date\",\"type\":\"uint256\"}],\"internalType\":\"struct Dochaintion.Donation[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getAllProjects\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"projectAddress\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"projectName\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"photoCid\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"totalDonation\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isActive\",\"type\":\"bool\"}],\"internalType\":\"struct Dochaintion.Project[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"number\",\"type\":\"uint256\"}],\"name\":\"getProject\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"projectId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"projectAddress\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"projectName\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"photoCid\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"totalDonation\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isActive\",\"type\":\"bool\"}],\"internalType\":\"struct Dochaintion.Project\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getRoleMember\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleMemberCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_projectAddress\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_projectName\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_description\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_photoCid\",\"type\":\"string\"}],\"name\":\"makeProject\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}.     * To change a role's admin, use {_setRoleAdmin}.\"},\"getRoleMember(bytes32,uint256)\":{\"details\":\"Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive.     * Role bearers are not sorted in any particular way, and their ordering may change at any point.     * WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.\"},\"getRoleMemberCount(bytes32)\":{\"details\":\"Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`.     * If `account` had not been already granted `role`, emits a {RoleGranted} event.     * Requirements:     * - the caller must have ``role``'s admin role.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account.     * Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced).     * If the calling account had been granted `role`, emits a {RoleRevoked} event.     * Requirements:     * - the caller must be `account`.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`.     * If `account` had been granted `role`, emits a {RoleRevoked} event.     * Requirements:     * - the caller must have ``role``'s admin role.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/C/Users/Aron/Documents/GitHub/DonationPlatform/TruffleContract/contracts/Dochaintion.sol\":\"Dochaintion\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/Aron/Documents/GitHub/DonationPlatform/TruffleContract/contracts/Dochaintion.sol\":{\"keccak256\":\"0x1be0af29d3d42642e15051ac72340e8bfdff1efd5cd24d9fd5e30b658e2c799a\",\"urls\":[\"bzz-raw://54351f5e4ad7aff6ee01cf5be3cbc5e68210b731213e71f44095f73a7f3276f6\",\"dweb:/ipfs/QmVoBvxYxmgQGXYgkTzjXt6BufkN9Q8xi4c6eBVXaXSu4F\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]},\"@openzeppelin/contracts/access/AccessControl.sol\":{\"keccak256\":\"0x37ff88aa5ca8f533e31b9e1cb5354816b15bb7d41c904ea1c8f5dd5a78d6da25\",\"urls\":[\"bzz-raw://f3731db435ced7084f2cb3947e708371c10a2e3f654dcfe2a237fc8fbdafbe5f\",\"dweb:/ipfs/QmUyiwkuiP2fYBVaTwwY82sJKxJyPQaBqAtS4uG6iaUSP7\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6a15ddddcbf29d2922a1e0d4151b5d2d33da24b93cc9ebc12390e0d855532f8\",\"urls\":[\"bzz-raw://7c119bcaecfa853d564ac88d312777f75fa1126a3bca88a3371adb0ad9f35cb0\",\"dweb:/ipfs/QmY9UPuXeSKq86Zh38fE43VGQPhKMN34mkuFSFqPcr6nvZ\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0xae0992eb1ec30fd1ecdf2e04a6036decfc9797bf11dc1ec84b546b74318d5ec2\",\"urls\":[\"bzz-raw://3b61f99a64e999682ad7bfbb3a1c762a20a0a5b30f9f2011693fa857969af61f\",\"dweb:/ipfs/QmZystFY76wkWCf7V3yKh3buZuKVKbswiE7y6yU62kk3zi\"]}},\"version\":1}",
    "bytecode": "0x60806040523480156200001157600080fd5b506040516200324c3803806200324c833981810160405262000037919081019062000212565b6200005e604051620000499062000280565b6040518091039020826200006560201b60201c565b50620002f0565b6200007782826200007b60201b60201c565b5050565b620000a9816000808581526020019081526020016000206000016200011e60201b62001d251790919060201c565b156200011a57620000bf6200015660201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60006200014e836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6200015e60201b60201c565b905092915050565b600033905090565b6000620001728383620001d860201b60201c565b620001cd578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050620001d2565b600090505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b6000815190506200020c81620002d6565b92915050565b6000602082840312156200022557600080fd5b60006200023584828501620001fb565b91505092915050565b60006200024d600a8362000297565b91507f4f574e45525f524f4c45000000000000000000000000000000000000000000006000830152600a82019050919050565b60006200028d826200023e565b9150819050919050565b600081905092915050565b6000620002af82620002b6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620002e181620002a2565b8114620002ed57600080fd5b50565b612f4c80620003006000396000f3fe6080604052600436106100f35760003560e01c806391d148541161008a578063d117b21711610059578063d117b2171461032d578063d547741f14610356578063e58378bb1461037f578063f0f3f2c8146103aa576100f3565b806391d148541461025f578063a217fddf1461029c578063ca15c873146102c7578063ca42b72c14610304576100f3565b806341544a82116100c657806341544a82146101b25780636c563abe146101db57806380d03829146101f75780639010d07c14610222576100f3565b8063248a9ca3146100f85780632f2ff15d1461013557806336568abe1461015e57806338a59a0714610187575b600080fd5b34801561010457600080fd5b5061011f600480360361011a9190810190612245565b6103e7565b60405161012c9190612b4e565b60405180910390f35b34801561014157600080fd5b5061015c6004803603610157919081019061226e565b610406565b005b34801561016a57600080fd5b506101856004803603610180919081019061226e565b610479565b005b34801561019357600080fd5b5061019c6104fc565b6040516101a99190612aef565b60405180910390f35b3480156101be57600080fd5b506101d960048036036101d491908101906122e6565b6106bd565b005b6101f560048036036101f091908101906122e6565b6108bd565b005b34801561020357600080fd5b5061020c610ce0565b6040516102199190612b11565b60405180910390f35b34801561022e57600080fd5b50610249600480360361024491908101906122aa565b61104d565b6040516102569190612aa4565b60405180910390f35b34801561026b57600080fd5b506102866004803603610281919081019061226e565b61107e565b6040516102939190612b33565b60405180910390f35b3480156102a857600080fd5b506102b16110af565b6040516102be9190612b4e565b60405180910390f35b3480156102d357600080fd5b506102ee60048036036102e99190810190612245565b6110b6565b6040516102fb9190612ccd565b60405180910390f35b34801561031057600080fd5b5061032b600480360361032691908101906122e6565b6110dc565b005b34801561033957600080fd5b50610354600480360361034f919081019061216e565b6112dd565b005b34801561036257600080fd5b5061037d6004803603610378919081019061226e565b611760565b005b34801561038b57600080fd5b506103946117d3565b6040516103a19190612b4e565b60405180910390f35b3480156103b657600080fd5b506103d160048036036103cc91908101906122e6565b6117ea565b6040516103de9190612cab565b60405180910390f35b6000806000838152602001908152602001600020600201549050919050565b61042c60008084815260200190815260200160002060020154610427611b98565b61107e565b61046b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046290612b89565b60405180910390fd5b6104758282611ba0565b5050565b610481611b98565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146104ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e590612c69565b60405180910390fd5b6104f88282611c33565b5050565b60606002805480602002602001604051908101604052809291908181526020016000905b828210156106b457838290600052602060002090600502016040518060a00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106925780601f1061066757610100808354040283529160200191610692565b820191906000526020600020905b81548152906001019060200180831161067557829003601f168201915b5050505050815260200160048201548152505081526020019060010190610520565b50505050905090565b6106da6040516106cc90612a7a565b60405180910390203361107e565b610719576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071090612ba9565b60405180910390fd5b6000339050600180838154811061072c57fe5b906000526020600020906008020160070160006101000a81548160ff02191690831515021790555060008090505b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156108895782600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106107ef57fe5b906000526020600020906008020160000154141561087c576001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061085357fe5b906000526020600020906008020160070160006101000a81548160ff0219169083151502179055505b808060010191505061075a565b5060016004600084815260200190815260200160002060070160006101000a81548160ff0219169083151502179055505050565b60003411610900576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f790612c29565b60405180910390fd5b6000811015610944576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093b90612c49565b60405180910390fd5b60006004600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16346040516109a090612a8f565b60006040518083038185875af1925050503d80600081146109dd576040519150601f19603f3d011682016040523d82523d6000602084013e6109e2565b606091505b5050905080610a26576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1d90612c09565b60405180910390fd5b3460046000848152602001908152602001600020600601600082825401925050819055503460018381548110610a5857fe5b906000526020600020906008020160060160008282540192505081905550610a7e611f7e565b6040518060a001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020013481526020016004600086815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600460008681526020019081526020016000206002018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ba75780601f10610b7c57610100808354040283529160200191610ba7565b820191906000526020600020905b815481529060010190602001808311610b8a57829003601f168201915b50505050508152602001428152509050600281908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003019080519060200190610c97929190611fd9565b506080820151816004015550507fd270de6e8160fe557e164bcd1fda6cb5dc6543111afc24c62882dfc7d2d0586081604051610cd39190612c89565b60405180910390a1505050565b60606001805480602002602001604051908101604052809291908181526020016000905b82821015611044578382906000526020600020906008020160405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e215780601f10610df657610100808354040283529160200191610e21565b820191906000526020600020905b815481529060010190602001808311610e0457829003601f168201915b50505050508152602001600382018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ec35780601f10610e9857610100808354040283529160200191610ec3565b820191906000526020600020905b815481529060010190602001808311610ea657829003601f168201915b50505050508152602001600482018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f655780601f10610f3a57610100808354040283529160200191610f65565b820191906000526020600020905b815481529060010190602001808311610f4857829003601f168201915b50505050508152602001600582018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110075780601f10610fdc57610100808354040283529160200191611007565b820191906000526020600020905b815481529060010190602001808311610fea57829003601f168201915b50505050508152602001600682015481526020016007820160009054906101000a900460ff16151515158152505081526020019060010190610d04565b50505050905090565b600061107682600080868152602001908152602001600020600001611cc690919063ffffffff16565b905092915050565b60006110a782600080868152602001908152602001600020600001611ce090919063ffffffff16565b905092915050565b6000801b81565b60006110d5600080848152602001908152602001600020600001611d10565b9050919050565b6110f96040516110eb90612a7a565b60405180910390203361107e565b611138576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112f90612ba9565b60405180910390fd5b600033905060006001838154811061114c57fe5b906000526020600020906008020160070160006101000a81548160ff02191690831515021790555060008090505b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156112a95782600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061120f57fe5b906000526020600020906008020160000154141561129c576000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061127357fe5b906000526020600020906008020160070160006101000a81548160ff0219169083151502179055505b808060010191505061117a565b5060006004600084815260200190815260200160002060070160006101000a81548160ff0219169083151502179055505050565b6112fa6040516112ec90612a7a565b60405180910390203361107e565b611339576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133090612ba9565b60405180910390fd5b6000600180549050905061134b612059565b6040518061010001604052808381526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018781526020018681526020018581526020018481526020016000815260200160011515815250905060018190806001815401808255809150506001900390600052602060002090600802016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201908051906020019061143a929190611fd9565b506060820151816003019080519060200190611457929190611fd9565b506080820151816004019080519060200190611474929190611fd9565b5060a0820151816005019080519060200190611491929190611fd9565b5060c0820151816006015560e08201518160070160006101000a81548160ff0219169083151502179055505050600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150506001900390600052602060002090600802016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019080519060200190611594929190611fd9565b5060608201518160030190805190602001906115b1929190611fd9565b5060808201518160040190805190602001906115ce929190611fd9565b5060a08201518160050190805190602001906115eb929190611fd9565b5060c0820151816006015560e08201518160070160006101000a81548160ff021916908315150217905550505080600460008481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019080519060200190611699929190611fd9565b5060608201518160030190805190602001906116b6929190611fd9565b5060808201518160040190805190602001906116d3929190611fd9565b5060a08201518160050190805190602001906116f0929190611fd9565b5060c0820151816006015560e08201518160070160006101000a81548160ff0219169083151502179055509050507f4fbe2c5389c7c2931bc2f33ba4b897066082ea8714cdd37206f9d19087270bbe338260405161174f929190612abf565b60405180910390a150505050505050565b61178660008084815260200190815260200160002060020154611781611b98565b61107e565b6117c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117bc90612bc9565b60405180910390fd5b6117cf8282611c33565b5050565b6040516117df90612a7a565b604051809103902081565b6117f2612059565b600182815481106117ff57fe5b906000526020600020906008020160070160009054906101000a900460ff1661185d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161185490612be9565b60405180910390fd5b6001828154811061186a57fe5b906000526020600020906008020160405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561197d5780601f106119525761010080835404028352916020019161197d565b820191906000526020600020905b81548152906001019060200180831161196057829003601f168201915b50505050508152602001600382018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a1f5780601f106119f457610100808354040283529160200191611a1f565b820191906000526020600020905b815481529060010190602001808311611a0257829003601f168201915b50505050508152602001600482018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ac15780601f10611a9657610100808354040283529160200191611ac1565b820191906000526020600020905b815481529060010190602001808311611aa457829003601f168201915b50505050508152602001600582018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b635780601f10611b3857610100808354040283529160200191611b63565b820191906000526020600020905b815481529060010190602001808311611b4657829003601f168201915b50505050508152602001600682015481526020016007820160009054906101000a900460ff1615151515815250509050919050565b600033905090565b611bc781600080858152602001908152602001600020600001611d2590919063ffffffff16565b15611c2f57611bd4611b98565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b611c5a81600080858152602001908152602001600020600001611d5590919063ffffffff16565b15611cc257611c67611b98565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b6000611cd58360000183611d85565b60001c905092915050565b6000611d08836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611df2565b905092915050565b6000611d1e82600001611e15565b9050919050565b6000611d4d836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611e26565b905092915050565b6000611d7d836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611e96565b905092915050565b600081836000018054905011611dd0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dc790612b69565b60405180910390fd5b826000018281548110611ddf57fe5b9060005260206000200154905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b600081600001805490509050919050565b6000611e328383611df2565b611e8b578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050611e90565b600090505b92915050565b60008083600101600084815260200190815260200160002054905060008114611f725760006001820390506000600186600001805490500390506000866000018281548110611ee157fe5b9060005260206000200154905080876000018481548110611efe57fe5b9060005260206000200181905550600183018760010160008381526020019081526020016000208190555086600001805480611f3657fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050611f78565b60009150505b92915050565b6040518060a00160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061201a57805160ff1916838001178555612048565b82800160010185558215612048579182015b8281111561204757825182559160200191906001019061202c565b5b50905061205591906120b6565b5090565b60405180610100016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001606081526020016060815260200160608152602001600081526020016000151581525090565b6120d891905b808211156120d45760008160009055506001016120bc565b5090565b90565b6000813590506120ea81612ed1565b92915050565b6000813590506120ff81612ee8565b92915050565b600082601f83011261211657600080fd5b813561212961212482612d15565b612ce8565b9150808252602083016020830185838301111561214557600080fd5b612150838284612e7e565b50505092915050565b60008135905061216881612eff565b92915050565b600080600080600060a0868803121561218657600080fd5b6000612194888289016120db565b955050602086013567ffffffffffffffff8111156121b157600080fd5b6121bd88828901612105565b945050604086013567ffffffffffffffff8111156121da57600080fd5b6121e688828901612105565b935050606086013567ffffffffffffffff81111561220357600080fd5b61220f88828901612105565b925050608086013567ffffffffffffffff81111561222c57600080fd5b61223888828901612105565b9150509295509295909350565b60006020828403121561225757600080fd5b6000612265848285016120f0565b91505092915050565b6000806040838503121561228157600080fd5b600061228f858286016120f0565b92505060206122a0858286016120db565b9150509250929050565b600080604083850312156122bd57600080fd5b60006122cb858286016120f0565b92505060206122dc85828601612159565b9150509250929050565b6000602082840312156122f857600080fd5b600061230684828501612159565b91505092915050565b600061231b838361285c565b905092915050565b600061232f8383612997565b905092915050565b61234081612e48565b82525050565b61234f81612df6565b82525050565b61235e81612df6565b82525050565b600061236f82612d61565b6123798185612d9c565b93508360208202850161238b85612d41565b8060005b858110156123c757848403895281516123a8858261230f565b94506123b383612d82565b925060208a0199505060018101905061238f565b50829750879550505050505092915050565b60006123e482612d6c565b6123ee8185612dad565b93508360208202850161240085612d51565b8060005b8581101561243c578484038952815161241d8582612323565b945061242883612d8f565b925060208a01995050600181019050612404565b50829750879550505050505092915050565b61245781612e08565b82525050565b61246681612e08565b82525050565b61247581612e14565b82525050565b600061248682612d77565b6124908185612dc9565b93506124a0818560208601612e8d565b6124a981612ec0565b840191505092915050565b60006124c1602283612dda565b91507f456e756d657261626c655365743a20696e646578206f7574206f6620626f756e60008301527f64730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612527602f83612dda565b91507f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60008301527f2061646d696e20746f206772616e7400000000000000000000000000000000006020830152604082019050919050565b600061258d601783612dda565b91507f43616c6c6572206973206e6f7420746865206f776e65720000000000000000006000830152602082019050919050565b60006125cd603083612dda565b91507f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60008301527f2061646d696e20746f207265766f6b65000000000000000000000000000000006020830152604082019050919050565b6000612633601983612dda565b91507f20546869732070726f6a65637420697320696e616374697665000000000000006000830152602082019050919050565b6000612673601b83612dda565b91507f5472616e7366657220776173206e6f742073756363657366756c6c00000000006000830152602082019050919050565b60006126b3601683612dda565b91507f4e6f204554482073656e64656420666f722066756e64000000000000000000006000830152602082019050919050565b60006126f3601083612dda565b91507f4e6f2070726f6a65637420666f756e64000000000000000000000000000000006000830152602082019050919050565b6000612733600a83612deb565b91507f4f574e45525f524f4c45000000000000000000000000000000000000000000006000830152600a82019050919050565b6000612773600083612dbe565b9150600082019050919050565b600061278d602f83612dda565b91507f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008301527f20726f6c657320666f722073656c6600000000000000000000000000000000006020830152604082019050919050565b600060a0830160008301516127fe6000860182612346565b5060208301516128116020860182612a5c565b5060408301516128246040860182612346565b506060830151848203606086015261283c828261247b565b91505060808301516128516080860182612a5c565b508091505092915050565b600060a0830160008301516128746000860182612346565b5060208301516128876020860182612a5c565b50604083015161289a6040860182612346565b50606083015184820360608601526128b2828261247b565b91505060808301516128c76080860182612a5c565b508091505092915050565b6000610100830160008301516128eb6000860182612a5c565b5060208301516128fe6020860182612346565b5060408301518482036040860152612916828261247b565b91505060608301518482036060860152612930828261247b565b9150506080830151848203608086015261294a828261247b565b91505060a083015184820360a0860152612964828261247b565b91505060c083015161297960c0860182612a5c565b5060e083015161298c60e086018261244e565b508091505092915050565b6000610100830160008301516129b06000860182612a5c565b5060208301516129c36020860182612346565b50604083015184820360408601526129db828261247b565b915050606083015184820360608601526129f5828261247b565b91505060808301518482036080860152612a0f828261247b565b91505060a083015184820360a0860152612a29828261247b565b91505060c0830151612a3e60c0860182612a5c565b5060e0830151612a5160e086018261244e565b508091505092915050565b612a6581612e3e565b82525050565b612a7481612e3e565b82525050565b6000612a8582612726565b9150819050919050565b6000612a9a82612766565b9150819050919050565b6000602082019050612ab96000830184612355565b92915050565b6000604082019050612ad46000830185612337565b8181036020830152612ae681846128d2565b90509392505050565b60006020820190508181036000830152612b098184612364565b905092915050565b60006020820190508181036000830152612b2b81846123d9565b905092915050565b6000602082019050612b48600083018461245d565b92915050565b6000602082019050612b63600083018461246c565b92915050565b60006020820190508181036000830152612b82816124b4565b9050919050565b60006020820190508181036000830152612ba28161251a565b9050919050565b60006020820190508181036000830152612bc281612580565b9050919050565b60006020820190508181036000830152612be2816125c0565b9050919050565b60006020820190508181036000830152612c0281612626565b9050919050565b60006020820190508181036000830152612c2281612666565b9050919050565b60006020820190508181036000830152612c42816126a6565b9050919050565b60006020820190508181036000830152612c62816126e6565b9050919050565b60006020820190508181036000830152612c8281612780565b9050919050565b60006020820190508181036000830152612ca381846127e6565b905092915050565b60006020820190508181036000830152612cc581846128d2565b905092915050565b6000602082019050612ce26000830184612a6b565b92915050565b6000604051905081810181811067ffffffffffffffff82111715612d0b57600080fd5b8060405250919050565b600067ffffffffffffffff821115612d2c57600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612e0182612e1e565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000612e5382612e5a565b9050919050565b6000612e6582612e6c565b9050919050565b6000612e7782612e1e565b9050919050565b82818337600083830152505050565b60005b83811015612eab578082015181840152602081019050612e90565b83811115612eba576000848401525b50505050565b6000601f19601f8301169050919050565b612eda81612df6565b8114612ee557600080fd5b50565b612ef181612e14565b8114612efc57600080fd5b50565b612f0881612e3e565b8114612f1357600080fd5b5056fea2646970667358221220a44fbb23232975c25ede6621ec15096d6bb703c4b1c7fcca6912967d8f7892de64736f6c63430006020033",
    "deployedBytecode": "0x6080604052600436106100f35760003560e01c806391d148541161008a578063d117b21711610059578063d117b2171461032d578063d547741f14610356578063e58378bb1461037f578063f0f3f2c8146103aa576100f3565b806391d148541461025f578063a217fddf1461029c578063ca15c873146102c7578063ca42b72c14610304576100f3565b806341544a82116100c657806341544a82146101b25780636c563abe146101db57806380d03829146101f75780639010d07c14610222576100f3565b8063248a9ca3146100f85780632f2ff15d1461013557806336568abe1461015e57806338a59a0714610187575b600080fd5b34801561010457600080fd5b5061011f600480360361011a9190810190612245565b6103e7565b60405161012c9190612b4e565b60405180910390f35b34801561014157600080fd5b5061015c6004803603610157919081019061226e565b610406565b005b34801561016a57600080fd5b506101856004803603610180919081019061226e565b610479565b005b34801561019357600080fd5b5061019c6104fc565b6040516101a99190612aef565b60405180910390f35b3480156101be57600080fd5b506101d960048036036101d491908101906122e6565b6106bd565b005b6101f560048036036101f091908101906122e6565b6108bd565b005b34801561020357600080fd5b5061020c610ce0565b6040516102199190612b11565b60405180910390f35b34801561022e57600080fd5b50610249600480360361024491908101906122aa565b61104d565b6040516102569190612aa4565b60405180910390f35b34801561026b57600080fd5b506102866004803603610281919081019061226e565b61107e565b6040516102939190612b33565b60405180910390f35b3480156102a857600080fd5b506102b16110af565b6040516102be9190612b4e565b60405180910390f35b3480156102d357600080fd5b506102ee60048036036102e99190810190612245565b6110b6565b6040516102fb9190612ccd565b60405180910390f35b34801561031057600080fd5b5061032b600480360361032691908101906122e6565b6110dc565b005b34801561033957600080fd5b50610354600480360361034f919081019061216e565b6112dd565b005b34801561036257600080fd5b5061037d6004803603610378919081019061226e565b611760565b005b34801561038b57600080fd5b506103946117d3565b6040516103a19190612b4e565b60405180910390f35b3480156103b657600080fd5b506103d160048036036103cc91908101906122e6565b6117ea565b6040516103de9190612cab565b60405180910390f35b6000806000838152602001908152602001600020600201549050919050565b61042c60008084815260200190815260200160002060020154610427611b98565b61107e565b61046b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046290612b89565b60405180910390fd5b6104758282611ba0565b5050565b610481611b98565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146104ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e590612c69565b60405180910390fd5b6104f88282611c33565b5050565b60606002805480602002602001604051908101604052809291908181526020016000905b828210156106b457838290600052602060002090600502016040518060a00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106925780601f1061066757610100808354040283529160200191610692565b820191906000526020600020905b81548152906001019060200180831161067557829003601f168201915b5050505050815260200160048201548152505081526020019060010190610520565b50505050905090565b6106da6040516106cc90612a7a565b60405180910390203361107e565b610719576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071090612ba9565b60405180910390fd5b6000339050600180838154811061072c57fe5b906000526020600020906008020160070160006101000a81548160ff02191690831515021790555060008090505b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156108895782600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106107ef57fe5b906000526020600020906008020160000154141561087c576001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061085357fe5b906000526020600020906008020160070160006101000a81548160ff0219169083151502179055505b808060010191505061075a565b5060016004600084815260200190815260200160002060070160006101000a81548160ff0219169083151502179055505050565b60003411610900576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f790612c29565b60405180910390fd5b6000811015610944576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093b90612c49565b60405180910390fd5b60006004600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16346040516109a090612a8f565b60006040518083038185875af1925050503d80600081146109dd576040519150601f19603f3d011682016040523d82523d6000602084013e6109e2565b606091505b5050905080610a26576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1d90612c09565b60405180910390fd5b3460046000848152602001908152602001600020600601600082825401925050819055503460018381548110610a5857fe5b906000526020600020906008020160060160008282540192505081905550610a7e611f7e565b6040518060a001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020013481526020016004600086815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600460008681526020019081526020016000206002018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ba75780601f10610b7c57610100808354040283529160200191610ba7565b820191906000526020600020905b815481529060010190602001808311610b8a57829003601f168201915b50505050508152602001428152509050600281908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003019080519060200190610c97929190611fd9565b506080820151816004015550507fd270de6e8160fe557e164bcd1fda6cb5dc6543111afc24c62882dfc7d2d0586081604051610cd39190612c89565b60405180910390a1505050565b60606001805480602002602001604051908101604052809291908181526020016000905b82821015611044578382906000526020600020906008020160405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e215780601f10610df657610100808354040283529160200191610e21565b820191906000526020600020905b815481529060010190602001808311610e0457829003601f168201915b50505050508152602001600382018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ec35780601f10610e9857610100808354040283529160200191610ec3565b820191906000526020600020905b815481529060010190602001808311610ea657829003601f168201915b50505050508152602001600482018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f655780601f10610f3a57610100808354040283529160200191610f65565b820191906000526020600020905b815481529060010190602001808311610f4857829003601f168201915b50505050508152602001600582018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110075780601f10610fdc57610100808354040283529160200191611007565b820191906000526020600020905b815481529060010190602001808311610fea57829003601f168201915b50505050508152602001600682015481526020016007820160009054906101000a900460ff16151515158152505081526020019060010190610d04565b50505050905090565b600061107682600080868152602001908152602001600020600001611cc690919063ffffffff16565b905092915050565b60006110a782600080868152602001908152602001600020600001611ce090919063ffffffff16565b905092915050565b6000801b81565b60006110d5600080848152602001908152602001600020600001611d10565b9050919050565b6110f96040516110eb90612a7a565b60405180910390203361107e565b611138576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112f90612ba9565b60405180910390fd5b600033905060006001838154811061114c57fe5b906000526020600020906008020160070160006101000a81548160ff02191690831515021790555060008090505b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156112a95782600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061120f57fe5b906000526020600020906008020160000154141561129c576000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061127357fe5b906000526020600020906008020160070160006101000a81548160ff0219169083151502179055505b808060010191505061117a565b5060006004600084815260200190815260200160002060070160006101000a81548160ff0219169083151502179055505050565b6112fa6040516112ec90612a7a565b60405180910390203361107e565b611339576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133090612ba9565b60405180910390fd5b6000600180549050905061134b612059565b6040518061010001604052808381526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018781526020018681526020018581526020018481526020016000815260200160011515815250905060018190806001815401808255809150506001900390600052602060002090600802016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201908051906020019061143a929190611fd9565b506060820151816003019080519060200190611457929190611fd9565b506080820151816004019080519060200190611474929190611fd9565b5060a0820151816005019080519060200190611491929190611fd9565b5060c0820151816006015560e08201518160070160006101000a81548160ff0219169083151502179055505050600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150506001900390600052602060002090600802016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019080519060200190611594929190611fd9565b5060608201518160030190805190602001906115b1929190611fd9565b5060808201518160040190805190602001906115ce929190611fd9565b5060a08201518160050190805190602001906115eb929190611fd9565b5060c0820151816006015560e08201518160070160006101000a81548160ff021916908315150217905550505080600460008481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019080519060200190611699929190611fd9565b5060608201518160030190805190602001906116b6929190611fd9565b5060808201518160040190805190602001906116d3929190611fd9565b5060a08201518160050190805190602001906116f0929190611fd9565b5060c0820151816006015560e08201518160070160006101000a81548160ff0219169083151502179055509050507f4fbe2c5389c7c2931bc2f33ba4b897066082ea8714cdd37206f9d19087270bbe338260405161174f929190612abf565b60405180910390a150505050505050565b61178660008084815260200190815260200160002060020154611781611b98565b61107e565b6117c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117bc90612bc9565b60405180910390fd5b6117cf8282611c33565b5050565b6040516117df90612a7a565b604051809103902081565b6117f2612059565b600182815481106117ff57fe5b906000526020600020906008020160070160009054906101000a900460ff1661185d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161185490612be9565b60405180910390fd5b6001828154811061186a57fe5b906000526020600020906008020160405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561197d5780601f106119525761010080835404028352916020019161197d565b820191906000526020600020905b81548152906001019060200180831161196057829003601f168201915b50505050508152602001600382018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a1f5780601f106119f457610100808354040283529160200191611a1f565b820191906000526020600020905b815481529060010190602001808311611a0257829003601f168201915b50505050508152602001600482018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ac15780601f10611a9657610100808354040283529160200191611ac1565b820191906000526020600020905b815481529060010190602001808311611aa457829003601f168201915b50505050508152602001600582018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b635780601f10611b3857610100808354040283529160200191611b63565b820191906000526020600020905b815481529060010190602001808311611b4657829003601f168201915b50505050508152602001600682015481526020016007820160009054906101000a900460ff1615151515815250509050919050565b600033905090565b611bc781600080858152602001908152602001600020600001611d2590919063ffffffff16565b15611c2f57611bd4611b98565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b611c5a81600080858152602001908152602001600020600001611d5590919063ffffffff16565b15611cc257611c67611b98565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b6000611cd58360000183611d85565b60001c905092915050565b6000611d08836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611df2565b905092915050565b6000611d1e82600001611e15565b9050919050565b6000611d4d836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611e26565b905092915050565b6000611d7d836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611e96565b905092915050565b600081836000018054905011611dd0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dc790612b69565b60405180910390fd5b826000018281548110611ddf57fe5b9060005260206000200154905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b600081600001805490509050919050565b6000611e328383611df2565b611e8b578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050611e90565b600090505b92915050565b60008083600101600084815260200190815260200160002054905060008114611f725760006001820390506000600186600001805490500390506000866000018281548110611ee157fe5b9060005260206000200154905080876000018481548110611efe57fe5b9060005260206000200181905550600183018760010160008381526020019081526020016000208190555086600001805480611f3657fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050611f78565b60009150505b92915050565b6040518060a00160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061201a57805160ff1916838001178555612048565b82800160010185558215612048579182015b8281111561204757825182559160200191906001019061202c565b5b50905061205591906120b6565b5090565b60405180610100016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001606081526020016060815260200160608152602001600081526020016000151581525090565b6120d891905b808211156120d45760008160009055506001016120bc565b5090565b90565b6000813590506120ea81612ed1565b92915050565b6000813590506120ff81612ee8565b92915050565b600082601f83011261211657600080fd5b813561212961212482612d15565b612ce8565b9150808252602083016020830185838301111561214557600080fd5b612150838284612e7e565b50505092915050565b60008135905061216881612eff565b92915050565b600080600080600060a0868803121561218657600080fd5b6000612194888289016120db565b955050602086013567ffffffffffffffff8111156121b157600080fd5b6121bd88828901612105565b945050604086013567ffffffffffffffff8111156121da57600080fd5b6121e688828901612105565b935050606086013567ffffffffffffffff81111561220357600080fd5b61220f88828901612105565b925050608086013567ffffffffffffffff81111561222c57600080fd5b61223888828901612105565b9150509295509295909350565b60006020828403121561225757600080fd5b6000612265848285016120f0565b91505092915050565b6000806040838503121561228157600080fd5b600061228f858286016120f0565b92505060206122a0858286016120db565b9150509250929050565b600080604083850312156122bd57600080fd5b60006122cb858286016120f0565b92505060206122dc85828601612159565b9150509250929050565b6000602082840312156122f857600080fd5b600061230684828501612159565b91505092915050565b600061231b838361285c565b905092915050565b600061232f8383612997565b905092915050565b61234081612e48565b82525050565b61234f81612df6565b82525050565b61235e81612df6565b82525050565b600061236f82612d61565b6123798185612d9c565b93508360208202850161238b85612d41565b8060005b858110156123c757848403895281516123a8858261230f565b94506123b383612d82565b925060208a0199505060018101905061238f565b50829750879550505050505092915050565b60006123e482612d6c565b6123ee8185612dad565b93508360208202850161240085612d51565b8060005b8581101561243c578484038952815161241d8582612323565b945061242883612d8f565b925060208a01995050600181019050612404565b50829750879550505050505092915050565b61245781612e08565b82525050565b61246681612e08565b82525050565b61247581612e14565b82525050565b600061248682612d77565b6124908185612dc9565b93506124a0818560208601612e8d565b6124a981612ec0565b840191505092915050565b60006124c1602283612dda565b91507f456e756d657261626c655365743a20696e646578206f7574206f6620626f756e60008301527f64730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612527602f83612dda565b91507f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60008301527f2061646d696e20746f206772616e7400000000000000000000000000000000006020830152604082019050919050565b600061258d601783612dda565b91507f43616c6c6572206973206e6f7420746865206f776e65720000000000000000006000830152602082019050919050565b60006125cd603083612dda565b91507f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60008301527f2061646d696e20746f207265766f6b65000000000000000000000000000000006020830152604082019050919050565b6000612633601983612dda565b91507f20546869732070726f6a65637420697320696e616374697665000000000000006000830152602082019050919050565b6000612673601b83612dda565b91507f5472616e7366657220776173206e6f742073756363657366756c6c00000000006000830152602082019050919050565b60006126b3601683612dda565b91507f4e6f204554482073656e64656420666f722066756e64000000000000000000006000830152602082019050919050565b60006126f3601083612dda565b91507f4e6f2070726f6a65637420666f756e64000000000000000000000000000000006000830152602082019050919050565b6000612733600a83612deb565b91507f4f574e45525f524f4c45000000000000000000000000000000000000000000006000830152600a82019050919050565b6000612773600083612dbe565b9150600082019050919050565b600061278d602f83612dda565b91507f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008301527f20726f6c657320666f722073656c6600000000000000000000000000000000006020830152604082019050919050565b600060a0830160008301516127fe6000860182612346565b5060208301516128116020860182612a5c565b5060408301516128246040860182612346565b506060830151848203606086015261283c828261247b565b91505060808301516128516080860182612a5c565b508091505092915050565b600060a0830160008301516128746000860182612346565b5060208301516128876020860182612a5c565b50604083015161289a6040860182612346565b50606083015184820360608601526128b2828261247b565b91505060808301516128c76080860182612a5c565b508091505092915050565b6000610100830160008301516128eb6000860182612a5c565b5060208301516128fe6020860182612346565b5060408301518482036040860152612916828261247b565b91505060608301518482036060860152612930828261247b565b9150506080830151848203608086015261294a828261247b565b91505060a083015184820360a0860152612964828261247b565b91505060c083015161297960c0860182612a5c565b5060e083015161298c60e086018261244e565b508091505092915050565b6000610100830160008301516129b06000860182612a5c565b5060208301516129c36020860182612346565b50604083015184820360408601526129db828261247b565b915050606083015184820360608601526129f5828261247b565b91505060808301518482036080860152612a0f828261247b565b91505060a083015184820360a0860152612a29828261247b565b91505060c0830151612a3e60c0860182612a5c565b5060e0830151612a5160e086018261244e565b508091505092915050565b612a6581612e3e565b82525050565b612a7481612e3e565b82525050565b6000612a8582612726565b9150819050919050565b6000612a9a82612766565b9150819050919050565b6000602082019050612ab96000830184612355565b92915050565b6000604082019050612ad46000830185612337565b8181036020830152612ae681846128d2565b90509392505050565b60006020820190508181036000830152612b098184612364565b905092915050565b60006020820190508181036000830152612b2b81846123d9565b905092915050565b6000602082019050612b48600083018461245d565b92915050565b6000602082019050612b63600083018461246c565b92915050565b60006020820190508181036000830152612b82816124b4565b9050919050565b60006020820190508181036000830152612ba28161251a565b9050919050565b60006020820190508181036000830152612bc281612580565b9050919050565b60006020820190508181036000830152612be2816125c0565b9050919050565b60006020820190508181036000830152612c0281612626565b9050919050565b60006020820190508181036000830152612c2281612666565b9050919050565b60006020820190508181036000830152612c42816126a6565b9050919050565b60006020820190508181036000830152612c62816126e6565b9050919050565b60006020820190508181036000830152612c8281612780565b9050919050565b60006020820190508181036000830152612ca381846127e6565b905092915050565b60006020820190508181036000830152612cc581846128d2565b905092915050565b6000602082019050612ce26000830184612a6b565b92915050565b6000604051905081810181811067ffffffffffffffff82111715612d0b57600080fd5b8060405250919050565b600067ffffffffffffffff821115612d2c57600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612e0182612e1e565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000612e5382612e5a565b9050919050565b6000612e6582612e6c565b9050919050565b6000612e7782612e1e565b9050919050565b82818337600083830152505050565b60005b83811015612eab578082015181840152602081019050612e90565b83811115612eba576000848401525b50505050565b6000601f19601f8301169050919050565b612eda81612df6565b8114612ee557600080fd5b50565b612ef181612e14565b8114612efc57600080fd5b50565b612f0881612e3e565b8114612f1357600080fd5b5056fea2646970667358221220a44fbb23232975c25ede6621ec15096d6bb703c4b1c7fcca6912967d8f7892de64736f6c63430006020033",
    "sourceMap": "155:4573:0:-:0;;;1053:82;8:9:-1;5:2;;;30:1;27;20:12;5:2;1053:82:0;;;;;;;;;;;;;;;;;;;;;;;;1098:29;1002:23;;;;;;;;;;;;;;1121:5;1098:10;;;:29;;:::i;:::-;1053:82;155:4573;;6586:110:3;6664:25;6675:4;6681:7;6664:10;;;:25;;:::i;:::-;6586:110;;:::o;7023:184::-;7096:33;7121:7;7096:6;:12;7103:4;7096:12;;;;;;;;;;;:20;;:24;;;;;;:33;;;;:::i;:::-;7092:109;;;7177:12;:10;;;:12;;:::i;:::-;7150:40;;7168:7;7150:40;;7162:4;7150:40;;;;;;;;;;7092:109;7023:184;;:::o;6429:141:5:-;6499:4;6522:41;6527:3;:10;;6555:5;6547:14;;6539:23;;6522:4;;;:41;;:::i;:::-;6515:48;;6429:141;;;;:::o;598:104:2:-;651:15;685:10;678:17;;598:104;:::o;1640:404:5:-;1703:4;1724:21;1734:3;1739:5;1724:9;;;:21;;:::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1761:23:5;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;3805:127::-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;5:134:-1:-;;89:6;83:13;74:22;;101:33;128:5;101:33;;;68:71;;;;;146:263;;261:2;249:9;240:7;236:23;232:32;229:2;;;277:1;274;267:12;229:2;312:1;329:64;385:7;376:6;365:9;361:22;329:64;;;319:74;;291:108;223:186;;;;;417:346;;595:85;677:2;672:3;595:85;;;588:92;;713:12;709:1;704:3;700:11;693:33;754:2;749:3;745:12;738:19;;581:182;;;;771:372;;970:148;1114:3;970:148;;;963:155;;1135:3;1128:10;;951:192;;;;1151:145;;1287:3;1272:18;;1265:31;;;;;1304:91;;1366:24;1384:5;1366:24;;;1355:35;;1349:46;;;;1402:121;;1475:42;1468:5;1464:54;1453:65;;1447:76;;;;1530:117;1599:24;1617:5;1599:24;;;1592:5;1589:35;1579:2;;1638:1;1635;1628:12;1579:2;1573:74;;155:4573:0;;;;;;;",
    "deployedSourceMap": "155:4573:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4280:112:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4280:112:3;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;4642:223;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4642:223:3;;;;;;;;;;;;;;;;:::i;:::-;;5816:205;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5816:205:3;;;;;;;;;;;;;;;;:::i;:::-;;3604:106:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3604:106:0;;;:::i;:::-;;;;;;;;;;;;;;;;4227:498;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4227:498:0;;;;;;;;;;;;;;;;:::i;:::-;;2209:1069;;;;;;;;;;;;;;;;:::i;:::-;;3286:103;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3286:103:0;;;:::i;:::-;;;;;;;;;;;;;;;;3963:136:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3963:136:3;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;2948:137;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2948:137:3;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;1725:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1725:49:3;;;:::i;:::-;;;;;;;;;;;;;;;;3253:125;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3253:125:3;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;3718:501:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3718:501:0;;;;;;;;;;;;;;;;:::i;:::-;;1167:1034;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1167:1034:0;;;;;;;;;;;;;;;;:::i;:::-;;5099:226:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5099:226:3;;;;;;;;;;;;;;;;:::i;:::-;;965:60:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;965:60:0;;;:::i;:::-;;;;;;;;;;;;;;;;3397:199;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3397:199:0;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;4280:112:3;4337:7;4363:6;:12;4370:4;4363:12;;;;;;;;;;;:22;;;4356:29;;4280:112;;;:::o;4642:223::-;4725:45;4733:6;:12;4740:4;4733:12;;;;;;;;;;;:22;;;4757:12;:10;:12::i;:::-;4725:7;:45::i;:::-;4717:105;;;;;;;;;;;;;;;;;;;;;;4833:25;4844:4;4850:7;4833:10;:25::i;:::-;4642:223;;:::o;5816:205::-;5913:12;:10;:12::i;:::-;5902:23;;:7;:23;;;5894:83;;;;;;;;;;;;;;;;;;;;;;5988:26;6000:4;6006:7;5988:11;:26::i;:::-;5816:205;;:::o;3604:106:0:-;3652:17;3689:13;3682:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3604:106;:::o;4227:498::-;4294:31;1002:23;;;;;;;;;;;;;;4314:10;4294:7;:31::i;:::-;4286:67;;;;;;;;;;;;;;;;;;;;;;4364:14;4381:10;4364:27;;4434:4;4402:12;4415:6;4402:20;;;;;;;;;;;;;;;;;;:29;;;:36;;;;;;;;;;;;;;;;;;4454:9;4466:1;4454:13;;4449:223;4473:16;:28;4490:10;4473:28;;;;;;;;;;;;;;;:35;;;;4469:1;:39;4449:223;;;4575:6;4534:16;:24;4551:6;4534:24;;;;;;;;;;;;;;;4559:1;4534:27;;;;;;;;;;;;;;;;;;:37;;;:47;4530:131;;;4641:4;4602:16;:24;4619:6;4602:24;;;;;;;;;;;;;;;4627:1;4602:27;;;;;;;;;;;;;;;;;;:36;;;:43;;;;;;;;;;;;;;;;;;4530:131;4510:3;;;;;;;4449:223;;;;4713:4;4682:11;:19;4694:6;4682:19;;;;;;;;;;;:28;;;:35;;;;;;;;;;;;;;;;;;4227:498;;:::o;2209:1069::-;2363:1;2351:9;:13;2343:48;;;;;;;;;;;;;;;;;;;;;;2429:1;2410:15;:20;;2402:49;;;;;;;;;;;;;;;;;;;;;;2511:12;2542:11;:28;2554:15;2542:28;;;;;;;;;;;:43;;;;;;;;;;;;:48;;2598:9;2542:102;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;19;14:27;;;;67:4;61:11;56:16;;134:4;130:9;123:4;105:16;101:27;97:43;94:1;90:51;84:4;77:65;157:16;154:1;147:27;211:16;208:1;201:4;198:1;194:12;179:49;5:228;;14:27;32:4;27:9;;5:228;;2510:134:0;;;2663:7;2655:47;;;;;;;;;;;;;;;;;;;;;;2761:9;2715:11;:28;2727:15;2715:28;;;;;;;;;;;:42;;;:55;;;;;;;;;;;2828:9;2781:12;2794:15;2781:29;;;;;;;;;;;;;;;;;;:43;;;:56;;;;;;;;;;;2884:28;;:::i;:::-;2928:235;;;;;;;;2955:10;2928:235;;;;;;2984:9;2928:235;;;;3012:11;:28;3024:15;3012:28;;;;;;;;;;;:43;;;;;;;;;;;;2928:235;;;;;;3074:11;:28;3086:15;3074:28;;;;;;;;;;;:40;;2928:235;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3133:15;2928:235;;;2884:279;;3174:13;3193:12;3174:32;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;3174:32:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;3244:26;3257:12;3244:26;;;;;;;;;;;;;;;2209:1069;;;:::o;3286:103::-;3333:16;3369:12;3362:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3286:103;:::o;3963:136:3:-;4036:7;4062:30;4086:5;4062:6;:12;4069:4;4062:12;;;;;;;;;;;:20;;:23;;:30;;;;:::i;:::-;4055:37;;3963:136;;;;:::o;2948:137::-;3017:4;3040:38;3070:7;3040:6;:12;3047:4;3040:12;;;;;;;;;;;:20;;:29;;:38;;;;:::i;:::-;3033:45;;2948:137;;;;:::o;1725:49::-;1770:4;1725:49;;;:::o;3253:125::-;3316:7;3342:29;:6;:12;3349:4;3342:12;;;;;;;;;;;:20;;:27;:29::i;:::-;3335:36;;3253:125;;;:::o;3718:501:0:-;3785:31;1002:23;;;;;;;;;;;;;;3805:10;3785:7;:31::i;:::-;3777:67;;;;;;;;;;;;;;;;;;;;;;3855:14;3872:10;3855:27;;3925:5;3893:12;3906:6;3893:20;;;;;;;;;;;;;;;;;;:29;;;:37;;;;;;;;;;;;;;;;;;3946:9;3958:1;3946:13;;3941:224;3965:16;:28;3982:10;3965:28;;;;;;;;;;;;;;;:35;;;;3961:1;:39;3941:224;;;4067:6;4026:16;:24;4043:6;4026:24;;;;;;;;;;;;;;;4051:1;4026:27;;;;;;;;;;;;;;;;;;:37;;;:47;4022:132;;;4133:5;4094:16;:24;4111:6;4094:24;;;;;;;;;;;;;;;4119:1;4094:27;;;;;;;;;;;;;;;;;;:36;;;:44;;;;;;;;;;;;;;;;;;4022:132;4002:3;;;;;;;3941:224;;;;4206:5;4175:11;:19;4187:6;4175:19;;;;;;;;;;;:28;;;:36;;;;;;;;;;;;;;;;;;3718:501;;:::o;1167:1034::-;1393:31;1002:23;;;;;;;;;;;;;;1413:10;1393:7;:31::i;:::-;1385:67;;;;;;;;;;;;;;;;;;;;;;1508:34;1545:12;:19;;;;1508:56;;1624:25;;:::i;:::-;1665:258;;;;;;;;1691:26;1665:258;;;;1736:15;1665:258;;;;;;1770:12;1665:258;;;;1801:5;1665:258;;;;1825:12;1665:258;;;;1856:9;1665:258;;;;1884:1;1665:258;;;;1904:4;1665:258;;;;;1624:299;;1975:12;1993:10;1975:29;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1975:29:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2015:16;:28;2032:10;2015:28;;;;;;;;;;;;;;;2049:10;2015:45;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2015:45:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2113:10;2071:11;:39;2083:26;2071:39;;;;;;;;;;;:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2158:35;2170:10;2182;2158:35;;;;;;;;;;;;;;;;1167:1034;;;;;;;:::o;5099:226:3:-;5183:45;5191:6;:12;5198:4;5191:12;;;;;;;;;;;:22;;;5215:12;:10;:12::i;:::-;5183:7;:45::i;:::-;5175:106;;;;;;;;;;;;;;;;;;;;;;5292:26;5304:4;5310:7;5292:11;:26::i;:::-;5099:226;;:::o;965:60:0:-;1002:23;;;;;;;;;;;;;;965:60;:::o;3397:199::-;3454:14;;:::i;:::-;3489:12;3502:6;3489:20;;;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;3481:67;;;;;;;;;;;;;;;;;;;;;;3568:12;3581:6;3568:20;;;;;;;;;;;;;;;;;;3561:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3397:199;;;:::o;598:104:2:-;651:15;685:10;678:17;;598:104;:::o;7023:184:3:-;7096:33;7121:7;7096:6;:12;7103:4;7096:12;;;;;;;;;;;:20;;:24;;:33;;;;:::i;:::-;7092:109;;;7177:12;:10;:12::i;:::-;7150:40;;7168:7;7150:40;;7162:4;7150:40;;;;;;;;;;7092:109;7023:184;;:::o;7213:188::-;7287:36;7315:7;7287:6;:12;7294:4;7287:12;;;;;;;;;;;:20;;:27;;:36;;;;:::i;:::-;7283:112;;;7371:12;:10;:12::i;:::-;7344:40;;7362:7;7344:40;;7356:4;7344:40;;;;;;;;;;7283:112;7213:188;;:::o;7650:147:5:-;7724:7;7766:22;7770:3;:10;;7782:5;7766:3;:22::i;:::-;7758:31;;7743:47;;7650:147;;;;:::o;6966:156::-;7046:4;7069:46;7079:3;:10;;7107:5;7099:14;;7091:23;;7069:9;:46::i;:::-;7062:53;;6966:156;;;;:::o;7203:115::-;7266:7;7292:19;7300:3;:10;;7292:7;:19::i;:::-;7285:26;;7203:115;;;:::o;6429:141::-;6499:4;6522:41;6527:3;:10;;6555:5;6547:14;;6539:23;;6522:4;:41::i;:::-;6515:48;;6429:141;;;;:::o;6738:147::-;6811:4;6834:44;6842:3;:10;;6870:5;6862:14;;6854:23;;6834:7;:44::i;:::-;6827:51;;6738:147;;;;:::o;4452:201::-;4519:7;4567:5;4546:3;:11;;:18;;;;:26;4538:73;;;;;;;;;;;;;;;;;;;;;;4628:3;:11;;4640:5;4628:18;;;;;;;;;;;;;;;;4621:25;;4452:201;;;;:::o;3805:127::-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;4013:107::-;4069:7;4095:3;:11;;:18;;;;4088:25;;4013:107;;;:::o;1640:404::-;1703:4;1724:21;1734:3;1739:5;1724:9;:21::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1761:23:5;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;2212:1512::-;2278:4;2394:18;2415:3;:12;;:19;2428:5;2415:19;;;;;;;;;;;;2394:40;;2463:1;2449:10;:15;2445:1273;;2806:21;2843:1;2830:10;:14;2806:38;;2858:17;2899:1;2878:3;:11;;:18;;;;:22;2858:42;;3140:17;3160:3;:11;;3172:9;3160:22;;;;;;;;;;;;;;;;3140:42;;3303:9;3274:3;:11;;3286:13;3274:26;;;;;;;;;;;;;;;:38;;;;3420:1;3404:13;:17;3378:3;:12;;:23;3391:9;3378:23;;;;;;;;;;;:43;;;;3527:3;:11;;:17;;;;;;;;;;;;;;;;;;;;;;;;3619:3;:12;;:19;3632:5;3619:19;;;;;;;;;;;3612:26;;;3660:4;3653:11;;;;;;;;2445:1273;3702:5;3695:12;;;2212:1512;;;;;:::o;155:4573:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5:130:-1:-;;85:6;72:20;63:29;;97:33;124:5;97:33;;;57:78;;;;;142:130;;222:6;209:20;200:29;;234:33;261:5;234:33;;;194:78;;;;;280:442;;382:3;375:4;367:6;363:17;359:27;349:2;;400:1;397;390:12;349:2;437:6;424:20;459:65;474:49;516:6;474:49;;;459:65;;;450:74;;544:6;537:5;530:21;580:4;572:6;568:17;613:4;606:5;602:16;648:3;639:6;634:3;630:16;627:25;624:2;;;665:1;662;655:12;624:2;675:41;709:6;704:3;699;675:41;;;342:380;;;;;;;;730:130;;810:6;797:20;788:29;;822:33;849:5;822:33;;;782:78;;;;;867:1167;;;;;;1079:3;1067:9;1058:7;1054:23;1050:33;1047:2;;;1096:1;1093;1086:12;1047:2;1131:1;1148:53;1193:7;1184:6;1173:9;1169:22;1148:53;;;1138:63;;1110:97;1266:2;1255:9;1251:18;1238:32;1290:18;1282:6;1279:30;1276:2;;;1322:1;1319;1312:12;1276:2;1342:63;1397:7;1388:6;1377:9;1373:22;1342:63;;;1332:73;;1217:194;1470:2;1459:9;1455:18;1442:32;1494:18;1486:6;1483:30;1480:2;;;1526:1;1523;1516:12;1480:2;1546:63;1601:7;1592:6;1581:9;1577:22;1546:63;;;1536:73;;1421:194;1674:2;1663:9;1659:18;1646:32;1698:18;1690:6;1687:30;1684:2;;;1730:1;1727;1720:12;1684:2;1750:63;1805:7;1796:6;1785:9;1781:22;1750:63;;;1740:73;;1625:194;1878:3;1867:9;1863:19;1850:33;1903:18;1895:6;1892:30;1889:2;;;1935:1;1932;1925:12;1889:2;1955:63;2010:7;2001:6;1990:9;1986:22;1955:63;;;1945:73;;1829:195;1041:993;;;;;;;;;2041:241;;2145:2;2133:9;2124:7;2120:23;2116:32;2113:2;;;2161:1;2158;2151:12;2113:2;2196:1;2213:53;2258:7;2249:6;2238:9;2234:22;2213:53;;;2203:63;;2175:97;2107:175;;;;;2289:366;;;2410:2;2398:9;2389:7;2385:23;2381:32;2378:2;;;2426:1;2423;2416:12;2378:2;2461:1;2478:53;2523:7;2514:6;2503:9;2499:22;2478:53;;;2468:63;;2440:97;2568:2;2586:53;2631:7;2622:6;2611:9;2607:22;2586:53;;;2576:63;;2547:98;2372:283;;;;;;2662:366;;;2783:2;2771:9;2762:7;2758:23;2754:32;2751:2;;;2799:1;2796;2789:12;2751:2;2834:1;2851:53;2896:7;2887:6;2876:9;2872:22;2851:53;;;2841:63;;2813:97;2941:2;2959:53;3004:7;2995:6;2984:9;2980:22;2959:53;;;2949:63;;2920:98;2745:283;;;;;;3035:241;;3139:2;3127:9;3118:7;3114:23;3110:32;3107:2;;;3155:1;3152;3145:12;3107:2;3190:1;3207:53;3252:7;3243:6;3232:9;3228:22;3207:53;;;3197:63;;3169:97;3101:175;;;;;3284:237;;3425:90;3511:3;3503:6;3425:90;;;3411:104;;3404:117;;;;;3530:233;;3669:88;3753:3;3745:6;3669:88;;;3655:102;;3648:115;;;;;3771:142;3862:45;3901:5;3862:45;;;3857:3;3850:58;3844:69;;;3920:103;3993:24;4011:5;3993:24;;;3988:3;3981:37;3975:48;;;4030:113;4113:24;4131:5;4113:24;;;4108:3;4101:37;4095:48;;;4221:1008;;4406:74;4474:5;4406:74;;;4493:106;4592:6;4587:3;4493:106;;;4486:113;;4622:3;4664:4;4656:6;4652:17;4647:3;4643:27;4691:76;4761:5;4691:76;;;4787:7;4815:1;4800:390;4825:6;4822:1;4819:13;4800:390;;;4887:9;4881:4;4877:20;4872:3;4865:33;4932:6;4926:13;4954:104;5053:4;5038:13;4954:104;;;4946:112;;5075:80;5148:6;5075:80;;;5065:90;;5178:4;5173:3;5169:14;5162:21;;4857:333;4847:1;4844;4840:9;4835:14;;4800:390;;;4804:14;5203:4;5196:11;;5220:3;5213:10;;4385:844;;;;;;;;;;5306:1000;;5489:73;5556:5;5489:73;;;5575:105;5673:6;5668:3;5575:105;;;5568:112;;5703:3;5745:4;5737:6;5733:17;5728:3;5724:27;5772:75;5841:5;5772:75;;;5867:7;5895:1;5880:387;5905:6;5902:1;5899:13;5880:387;;;5967:9;5961:4;5957:20;5952:3;5945:33;6012:6;6006:13;6034:102;6131:4;6116:13;6034:102;;;6026:110;;6153:79;6225:6;6153:79;;;6143:89;;6255:4;6250:3;6246:14;6239:21;;5937:330;5927:1;5924;5920:9;5915:14;;5880:387;;;5884:14;6280:4;6273:11;;6297:3;6290:10;;5468:838;;;;;;;;;;6314:94;6381:21;6396:5;6381:21;;;6376:3;6369:34;6363:45;;;6415:104;6492:21;6507:5;6492:21;;;6487:3;6480:34;6474:45;;;6526:113;6609:24;6627:5;6609:24;;;6604:3;6597:37;6591:48;;;6646:319;;6744:35;6773:5;6744:35;;;6791:61;6845:6;6840:3;6791:61;;;6784:68;;6857:52;6902:6;6897:3;6890:4;6883:5;6879:16;6857:52;;;6930:29;6952:6;6930:29;;;6925:3;6921:39;6914:46;;6724:241;;;;;;6973:371;;7133:67;7197:2;7192:3;7133:67;;;7126:74;;7233:34;7229:1;7224:3;7220:11;7213:55;7302:4;7297:2;7292:3;7288:12;7281:26;7335:2;7330:3;7326:12;7319:19;;7119:225;;;;7353:384;;7513:67;7577:2;7572:3;7513:67;;;7506:74;;7613:34;7609:1;7604:3;7600:11;7593:55;7682:17;7677:2;7672:3;7668:12;7661:39;7728:2;7723:3;7719:12;7712:19;;7499:238;;;;7746:323;;7906:67;7970:2;7965:3;7906:67;;;7899:74;;8006:25;8002:1;7997:3;7993:11;7986:46;8060:2;8055:3;8051:12;8044:19;;7892:177;;;;8078:385;;8238:67;8302:2;8297:3;8238:67;;;8231:74;;8338:34;8334:1;8329:3;8325:11;8318:55;8407:18;8402:2;8397:3;8393:12;8386:40;8454:2;8449:3;8445:12;8438:19;;8224:239;;;;8472:325;;8632:67;8696:2;8691:3;8632:67;;;8625:74;;8732:27;8728:1;8723:3;8719:11;8712:48;8788:2;8783:3;8779:12;8772:19;;8618:179;;;;8806:327;;8966:67;9030:2;9025:3;8966:67;;;8959:74;;9066:29;9062:1;9057:3;9053:11;9046:50;9124:2;9119:3;9115:12;9108:19;;8952:181;;;;9142:322;;9302:67;9366:2;9361:3;9302:67;;;9295:74;;9402:24;9398:1;9393:3;9389:11;9382:45;9455:2;9450:3;9446:12;9439:19;;9288:176;;;;9473:316;;9633:67;9697:2;9692:3;9633:67;;;9626:74;;9733:18;9729:1;9724:3;9720:11;9713:39;9780:2;9775:3;9771:12;9764:19;;9619:170;;;;9798:346;;9976:85;10058:2;10053:3;9976:85;;;9969:92;;10094:12;10090:1;10085:3;10081:11;10074:33;10135:2;10130:3;10126:12;10119:19;;9962:182;;;;10153:296;;10330:83;10411:1;10406:3;10330:83;;;10323:90;;10441:1;10436:3;10432:11;10425:18;;10316:133;;;;10458:384;;10618:67;10682:2;10677:3;10618:67;;;10611:74;;10718:34;10714:1;10709:3;10705:11;10698:55;10787:17;10782:2;10777:3;10773:12;10766:39;10833:2;10828:3;10824:12;10817:19;;10604:238;;;;10915:1049;;11064:4;11059:3;11055:14;11150:4;11143:5;11139:16;11133:23;11162:63;11219:4;11214:3;11210:14;11196:12;11162:63;;;11084:147;11306:4;11299:5;11295:16;11289:23;11318:63;11375:4;11370:3;11366:14;11352:12;11318:63;;;11241:146;11470:4;11463:5;11459:16;11453:23;11482:63;11539:4;11534:3;11530:14;11516:12;11482:63;;;11397:154;11631:4;11624:5;11620:16;11614:23;11683:3;11677:4;11673:14;11666:4;11661:3;11657:14;11650:38;11703:69;11767:4;11753:12;11703:69;;;11695:77;;11561:223;11857:4;11850:5;11846:16;11840:23;11869:63;11926:4;11921:3;11917:14;11903:12;11869:63;;;11794:144;11955:4;11948:11;;11037:927;;;;;;12036:1035;;12171:4;12166:3;12162:14;12257:4;12250:5;12246:16;12240:23;12269:63;12326:4;12321:3;12317:14;12303:12;12269:63;;;12191:147;12413:4;12406:5;12402:16;12396:23;12425:63;12482:4;12477:3;12473:14;12459:12;12425:63;;;12348:146;12577:4;12570:5;12566:16;12560:23;12589:63;12646:4;12641:3;12637:14;12623:12;12589:63;;;12504:154;12738:4;12731:5;12727:16;12721:23;12790:3;12784:4;12780:14;12773:4;12768:3;12764:14;12757:38;12810:69;12874:4;12860:12;12810:69;;;12802:77;;12668:223;12964:4;12957:5;12953:16;12947:23;12976:63;13033:4;13028:3;13024:14;13010:12;12976:63;;;12901:144;13062:4;13055:11;;12144:927;;;;;;13141:1745;;13288:6;13283:3;13279:16;13378:4;13371:5;13367:16;13361:23;13390:63;13447:4;13442:3;13438:14;13424:12;13390:63;;;13310:149;13542:4;13535:5;13531:16;13525:23;13554:63;13611:4;13606:3;13602:14;13588:12;13554:63;;;13469:154;13703:4;13696:5;13692:16;13686:23;13755:3;13749:4;13745:14;13738:4;13733:3;13729:14;13722:38;13775:69;13839:4;13825:12;13775:69;;;13767:77;;13633:223;13929:4;13922:5;13918:16;13912:23;13981:3;13975:4;13971:14;13964:4;13959:3;13955:14;13948:38;14001:69;14065:4;14051:12;14001:69;;;13993:77;;13866:216;14162:4;14155:5;14151:16;14145:23;14214:3;14208:4;14204:14;14197:4;14192:3;14188:14;14181:38;14234:69;14298:4;14284:12;14234:69;;;14226:77;;14092:223;14392:4;14385:5;14381:16;14375:23;14444:3;14438:4;14434:14;14427:4;14422:3;14418:14;14411:38;14464:69;14528:4;14514:12;14464:69;;;14456:77;;14325:220;14627:4;14620:5;14616:16;14610:23;14639:63;14696:4;14691:3;14687:14;14673:12;14639:63;;;14555:153;14785:4;14778:5;14774:16;14768:23;14797:57;14848:4;14843:3;14839:14;14825:12;14797:57;;;14718:142;14877:4;14870:11;;13261:1625;;;;;;14956:1731;;15089:6;15084:3;15080:16;15179:4;15172:5;15168:16;15162:23;15191:63;15248:4;15243:3;15239:14;15225:12;15191:63;;;15111:149;15343:4;15336:5;15332:16;15326:23;15355:63;15412:4;15407:3;15403:14;15389:12;15355:63;;;15270:154;15504:4;15497:5;15493:16;15487:23;15556:3;15550:4;15546:14;15539:4;15534:3;15530:14;15523:38;15576:69;15640:4;15626:12;15576:69;;;15568:77;;15434:223;15730:4;15723:5;15719:16;15713:23;15782:3;15776:4;15772:14;15765:4;15760:3;15756:14;15749:38;15802:69;15866:4;15852:12;15802:69;;;15794:77;;15667:216;15963:4;15956:5;15952:16;15946:23;16015:3;16009:4;16005:14;15998:4;15993:3;15989:14;15982:38;16035:69;16099:4;16085:12;16035:69;;;16027:77;;15893:223;16193:4;16186:5;16182:16;16176:23;16245:3;16239:4;16235:14;16228:4;16223:3;16219:14;16212:38;16265:69;16329:4;16315:12;16265:69;;;16257:77;;16126:220;16428:4;16421:5;16417:16;16411:23;16440:63;16497:4;16492:3;16488:14;16474:12;16440:63;;;16356:153;16586:4;16579:5;16575:16;16569:23;16598:57;16649:4;16644:3;16640:14;16626:12;16598:57;;;16519:142;16678:4;16671:11;;15062:1625;;;;;;16694:103;16767:24;16785:5;16767:24;;;16762:3;16755:37;16749:48;;;16804:113;16887:24;16905:5;16887:24;;;16882:3;16875:37;16869:48;;;16924:372;;17123:148;17267:3;17123:148;;;17116:155;;17288:3;17281:10;;17104:192;;;;17303:370;;17501:147;17644:3;17501:147;;;17494:154;;17665:3;17658:10;;17482:191;;;;17680:213;;17798:2;17787:9;17783:18;17775:26;;17812:71;17880:1;17869:9;17865:17;17856:6;17812:71;;;17769:124;;;;;17900:480;;18100:2;18089:9;18085:18;18077:26;;18114:79;18190:1;18179:9;18175:17;18166:6;18114:79;;;18241:9;18235:4;18231:20;18226:2;18215:9;18211:18;18204:48;18266:104;18365:4;18356:6;18266:104;;;18258:112;;18071:309;;;;;;18387:441;;18595:2;18584:9;18580:18;18572:26;;18645:9;18639:4;18635:20;18631:1;18620:9;18616:17;18609:47;18670:148;18813:4;18804:6;18670:148;;;18662:156;;18566:262;;;;;18835:437;;19041:2;19030:9;19026:18;19018:26;;19091:9;19085:4;19081:20;19077:1;19066:9;19062:17;19055:47;19116:146;19257:4;19248:6;19116:146;;;19108:154;;19012:260;;;;;19279:201;;19391:2;19380:9;19376:18;19368:26;;19405:65;19467:1;19456:9;19452:17;19443:6;19405:65;;;19362:118;;;;;19487:213;;19605:2;19594:9;19590:18;19582:26;;19619:71;19687:1;19676:9;19672:17;19663:6;19619:71;;;19576:124;;;;;19707:407;;19898:2;19887:9;19883:18;19875:26;;19948:9;19942:4;19938:20;19934:1;19923:9;19919:17;19912:47;19973:131;20099:4;19973:131;;;19965:139;;19869:245;;;;20121:407;;20312:2;20301:9;20297:18;20289:26;;20362:9;20356:4;20352:20;20348:1;20337:9;20333:17;20326:47;20387:131;20513:4;20387:131;;;20379:139;;20283:245;;;;20535:407;;20726:2;20715:9;20711:18;20703:26;;20776:9;20770:4;20766:20;20762:1;20751:9;20747:17;20740:47;20801:131;20927:4;20801:131;;;20793:139;;20697:245;;;;20949:407;;21140:2;21129:9;21125:18;21117:26;;21190:9;21184:4;21180:20;21176:1;21165:9;21161:17;21154:47;21215:131;21341:4;21215:131;;;21207:139;;21111:245;;;;21363:407;;21554:2;21543:9;21539:18;21531:26;;21604:9;21598:4;21594:20;21590:1;21579:9;21575:17;21568:47;21629:131;21755:4;21629:131;;;21621:139;;21525:245;;;;21777:407;;21968:2;21957:9;21953:18;21945:26;;22018:9;22012:4;22008:20;22004:1;21993:9;21989:17;21982:47;22043:131;22169:4;22043:131;;;22035:139;;21939:245;;;;22191:407;;22382:2;22371:9;22367:18;22359:26;;22432:9;22426:4;22422:20;22418:1;22407:9;22403:17;22396:47;22457:131;22583:4;22457:131;;;22449:139;;22353:245;;;;22605:407;;22796:2;22785:9;22781:18;22773:26;;22846:9;22840:4;22836:20;22832:1;22821:9;22817:17;22810:47;22871:131;22997:4;22871:131;;;22863:139;;22767:245;;;;23019:407;;23210:2;23199:9;23195:18;23187:26;;23260:9;23254:4;23250:20;23246:1;23235:9;23231:17;23224:47;23285:131;23411:4;23285:131;;;23277:139;;23181:245;;;;23433:357;;23599:2;23588:9;23584:18;23576:26;;23649:9;23643:4;23639:20;23635:1;23624:9;23620:17;23613:47;23674:106;23775:4;23766:6;23674:106;;;23666:114;;23570:220;;;;;23797:353;;23961:2;23950:9;23946:18;23938:26;;24011:9;24005:4;24001:20;23997:1;23986:9;23982:17;23975:47;24036:104;24135:4;24126:6;24036:104;;;24028:112;;23932:218;;;;;24157:213;;24275:2;24264:9;24260:18;24252:26;;24289:71;24357:1;24346:9;24342:17;24333:6;24289:71;;;24246:124;;;;;24377:256;;24439:2;24433:9;24423:19;;24477:4;24469:6;24465:17;24576:6;24564:10;24561:22;24540:18;24528:10;24525:34;24522:62;24519:2;;;24597:1;24594;24587:12;24519:2;24617:10;24613:2;24606:22;24417:216;;;;;24640:322;;24784:18;24776:6;24773:30;24770:2;;;24816:1;24813;24806:12;24770:2;24883:4;24879:9;24872:4;24864:6;24860:17;24856:33;24848:41;;24947:4;24941;24937:15;24929:23;;24707:255;;;;24969:171;;25075:3;25067:11;;25113:4;25108:3;25104:14;25096:22;;25061:79;;;;25147:170;;25252:3;25244:11;;25290:4;25285:3;25281:14;25273:22;;25238:79;;;;25324:157;;25453:5;25447:12;25437:22;;25418:63;;;;25488:156;;25616:5;25610:12;25600:22;;25581:63;;;;25651:118;;25741:5;25735:12;25725:22;;25706:63;;;;25776:128;;25894:4;25889:3;25885:14;25877:22;;25871:33;;;;25911:127;;26028:4;26023:3;26019:14;26011:22;;26005:33;;;;26046:198;;26196:6;26191:3;26184:19;26233:4;26228:3;26224:14;26209:29;;26177:67;;;;;26253:197;;26402:6;26397:3;26390:19;26439:4;26434:3;26430:14;26415:29;;26383:67;;;;;26459:144;;26594:3;26579:18;;26572:31;;;;;26612:153;;26717:6;26712:3;26705:19;26754:4;26749:3;26745:14;26730:29;;26698:67;;;;;26774:163;;26889:6;26884:3;26877:19;26926:4;26921:3;26917:14;26902:29;;26870:67;;;;;26946:145;;27082:3;27067:18;;27060:31;;;;;27099:91;;27161:24;27179:5;27161:24;;;27150:35;;27144:46;;;;27197:85;;27270:5;27263:13;27256:21;27245:32;;27239:43;;;;27289:72;;27351:5;27340:16;;27334:27;;;;27368:121;;27441:42;27434:5;27430:54;27419:65;;27413:76;;;;27496:72;;27558:5;27547:16;;27541:27;;;;27575:129;;27662:37;27693:5;27662:37;;;27649:50;;27643:61;;;;27711:121;;27790:37;27821:5;27790:37;;;27777:50;;27771:61;;;;27839:108;;27918:24;27936:5;27918:24;;;27905:37;;27899:48;;;;27955:145;28036:6;28031:3;28026;28013:30;28092:1;28083:6;28078:3;28074:16;28067:27;28006:94;;;;28109:268;28174:1;28181:101;28195:6;28192:1;28189:13;28181:101;;;28271:1;28266:3;28262:11;28256:18;28252:1;28247:3;28243:11;28236:39;28217:2;28214:1;28210:10;28205:15;;28181:101;;;28297:6;28294:1;28291:13;28288:2;;;28362:1;28353:6;28348:3;28344:16;28337:27;28288:2;28158:219;;;;;28385:97;;28473:2;28469:7;28464:2;28457:5;28453:14;28449:28;28439:38;;28433:49;;;;28490:117;28559:24;28577:5;28559:24;;;28552:5;28549:35;28539:2;;28598:1;28595;28588:12;28539:2;28533:74;;28614:117;28683:24;28701:5;28683:24;;;28676:5;28673:35;28663:2;;28722:1;28719;28712:12;28663:2;28657:74;;28738:117;28807:24;28825:5;28807:24;;;28800:5;28797:35;28787:2;;28846:1;28843;28836:12;28787:2;28781:74;",
    "source": "// SPDX-License-Identifier: MIT\r\npragma solidity ^0.6.0;\r\npragma experimental ABIEncoderV2;\r\nimport \"@openzeppelin/contracts/access/AccessControl.sol\";\r\n\r\ncontract Dochaintion is AccessControl {\r\n    //Structs\r\n    struct Project {\r\n        uint256 projectId;\r\n        address projectAddress;\r\n        string projectName;\r\n        string name;\r\n        string description;\r\n        string photoCid;\r\n        uint256 totalDonation;\r\n        bool isActive;\r\n    }\r\n\r\n    struct Donation {\r\n        address donator;\r\n        uint256 amount;\r\n        address projectAddress;\r\n        string projectName;\r\n        uint256 date;\r\n    }\r\n\r\n    //Arrays\r\n    Project[] projectsList;\r\n    Donation[] donationsList;\r\n\r\n    //Mappings\r\n    mapping(address => Project[]) founderToProject;\r\n    mapping(uint256 => Project) idToProject;\r\n\r\n    //Events\r\n    event projectMade(address founder, Project madeProject);\r\n    event donationMade(Donation donation);\r\n\r\n    //Rolls\r\n    bytes32 public constant OWNER_ROLE = keccak256(\"OWNER_ROLE\");\r\n\r\n    //Constructor\r\n    constructor(address owner) public {\r\n        _setupRole(OWNER_ROLE, owner);\r\n    }\r\n\r\n    //Project creation\r\n    function makeProject(\r\n        address _projectAddress,\r\n        string memory _projectName,\r\n        string memory _name,\r\n        string memory _description,\r\n        string memory _photoCid\r\n    ) public {\r\n        require(hasRole(OWNER_ROLE, msg.sender), \"Caller is not the owner\");\r\n        //Get latest number for project id.\r\n        uint256 currentLatestProjectNumber = projectsList.length;\r\n\r\n        //Make project with given information\r\n        Project memory newProject =\r\n            Project(\r\n                currentLatestProjectNumber,\r\n                _projectAddress,\r\n                _projectName,\r\n                _name,\r\n                _description,\r\n                _photoCid,\r\n                0,\r\n                true\r\n            );\r\n\r\n        //Save the project for lookup\r\n        projectsList.push(newProject);\r\n        founderToProject[msg.sender].push(newProject);\r\n        idToProject[currentLatestProjectNumber] = newProject;\r\n\r\n        //Event\r\n        emit projectMade(msg.sender, newProject);\r\n    }\r\n\r\n    function fundProject(uint256 chosenProjectId) public payable {\r\n        //Check if ETH amount is send and a project is found\r\n        require(msg.value > 0, \"No ETH sended for fund\");\r\n        require(chosenProjectId >= 0, \"No project found\");\r\n\r\n        //check if call succeeded go further\r\n        (bool success, ) =\r\n            idToProject[chosenProjectId].projectAddress.call{value: msg.value}(\r\n                \"\"\r\n            );\r\n        require(success, \"Transfer was not succesfull\");\r\n\r\n        idToProject[chosenProjectId].totalDonation += msg.value;\r\n        projectsList[chosenProjectId].totalDonation += msg.value;\r\n\r\n        //Save donation in chain\r\n        Donation memory madeDonation =\r\n            Donation(\r\n                msg.sender,\r\n                msg.value,\r\n                idToProject[chosenProjectId].projectAddress,\r\n                idToProject[chosenProjectId].projectName,\r\n                block.timestamp\r\n            );\r\n        donationsList.push(madeDonation);\r\n\r\n        //Event it\r\n        emit donationMade(madeDonation);\r\n    }\r\n\r\n    function getAllProjects() public view returns (Project[] memory) {\r\n        return projectsList;\r\n    }\r\n\r\n    function getProject(uint256 number) public view returns (Project memory) {\r\n        require(projectsList[number].isActive, \" This project is inactive\");\r\n\r\n        return projectsList[number];\r\n    }\r\n\r\n    function getAllDonations() public view returns (Donation[] memory) {\r\n        return donationsList;\r\n    }\r\n\r\n    function deactiveProject(uint256 number) public {\r\n        require(hasRole(OWNER_ROLE, msg.sender), \"Caller is not the owner\");\r\n        address caller = msg.sender;\r\n        projectsList[number].isActive = false;\r\n        for (uint256 i = 0; i < founderToProject[msg.sender].length; i++) {\r\n            if (founderToProject[caller][i].projectId == number) {\r\n                founderToProject[caller][i].isActive = false;\r\n            }\r\n        }\r\n        idToProject[number].isActive = false;\r\n    }\r\n\r\n    function activateProject(uint256 number) public {\r\n        require(hasRole(OWNER_ROLE, msg.sender), \"Caller is not the owner\");\r\n        address caller = msg.sender;\r\n        projectsList[number].isActive = true;\r\n        for (uint256 i = 0; i < founderToProject[msg.sender].length; i++) {\r\n            if (founderToProject[caller][i].projectId == number) {\r\n                founderToProject[caller][i].isActive = true;\r\n            }\r\n        }\r\n        idToProject[number].isActive = true;\r\n    }\r\n}\r\n",
    "sourcePath": "C:/Users/Aron/Documents/GitHub/DonationPlatform/TruffleContract/contracts/Dochaintion.sol",
    "ast": {
        "absolutePath": "/C/Users/Aron/Documents/GitHub/DonationPlatform/TruffleContract/contracts/Dochaintion.sol",
        "exportedSymbols": {
            "Dochaintion": [
                402
            ]
        },
        "id": 403,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1,
                "literals": [
                    "solidity",
                    "^",
                    "0.6",
                    ".0"
                ],
                "nodeType": "PragmaDirective",
                "src": "33:23:0"
            },
            {
                "id": 2,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "58:33:0"
            },
            {
                "absolutePath": "@openzeppelin/contracts/access/AccessControl.sol",
                "file": "@openzeppelin/contracts/access/AccessControl.sol",
                "id": 3,
                "nodeType": "ImportDirective",
                "scope": 403,
                "sourceUnit": 729,
                "src": "93:58:0",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "abstract": false,
                "baseContracts": [
                    {
                        "arguments": null,
                        "baseName": {
                            "contractScope": null,
                            "id": 4,
                            "name": "AccessControl",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 728,
                            "src": "179:13:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AccessControl_$728",
                                "typeString": "contract AccessControl"
                            }
                        },
                        "id": 5,
                        "nodeType": "InheritanceSpecifier",
                        "src": "179:13:0"
                    }
                ],
                "contractDependencies": [
                    458,
                    728
                ],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "id": 402,
                "linearizedBaseContracts": [
                    402,
                    728,
                    458
                ],
                "name": "Dochaintion",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "canonicalName": "Dochaintion.Project",
                        "id": 22,
                        "members": [
                            {
                                "constant": false,
                                "id": 7,
                                "name": "projectId",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 22,
                                "src": "241:17:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 6,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "241:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 9,
                                "name": "projectAddress",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 22,
                                "src": "269:22:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 8,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "269:7:0",
                                    "stateMutability": "nonpayable",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 11,
                                "name": "projectName",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 22,
                                "src": "302:18:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 10,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "302:6:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 13,
                                "name": "name",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 22,
                                "src": "331:11:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 12,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "331:6:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 15,
                                "name": "description",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 22,
                                "src": "353:18:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 14,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "353:6:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 17,
                                "name": "photoCid",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 22,
                                "src": "382:15:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 16,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "382:6:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 19,
                                "name": "totalDonation",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 22,
                                "src": "408:21:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 18,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "408:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 21,
                                "name": "isActive",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 22,
                                "src": "440:13:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 20,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "440:4:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }
                        ],
                        "name": "Project",
                        "nodeType": "StructDefinition",
                        "scope": 402,
                        "src": "215:246:0",
                        "visibility": "public"
                    },
                    {
                        "canonicalName": "Dochaintion.Donation",
                        "id": 33,
                        "members": [
                            {
                                "constant": false,
                                "id": 24,
                                "name": "donator",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 33,
                                "src": "496:15:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 23,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "496:7:0",
                                    "stateMutability": "nonpayable",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 26,
                                "name": "amount",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 33,
                                "src": "522:14:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 25,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "522:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 28,
                                "name": "projectAddress",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 33,
                                "src": "547:22:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 27,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "547:7:0",
                                    "stateMutability": "nonpayable",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 30,
                                "name": "projectName",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 33,
                                "src": "580:18:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 29,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "580:6:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 32,
                                "name": "date",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 33,
                                "src": "609:12:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 31,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "609:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }
                        ],
                        "name": "Donation",
                        "nodeType": "StructDefinition",
                        "scope": 402,
                        "src": "469:160:0",
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 36,
                        "name": "projectsList",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 402,
                        "src": "651:22:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                            "typeString": "struct Dochaintion.Project[]"
                        },
                        "typeName": {
                            "baseType": {
                                "contractScope": null,
                                "id": 34,
                                "name": "Project",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 22,
                                "src": "651:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Project_$22_storage_ptr",
                                    "typeString": "struct Dochaintion.Project"
                                }
                            },
                            "id": 35,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "651:9:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage_ptr",
                                "typeString": "struct Dochaintion.Project[]"
                            }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 39,
                        "name": "donationsList",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 402,
                        "src": "680:24:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Donation_$33_storage_$dyn_storage",
                            "typeString": "struct Dochaintion.Donation[]"
                        },
                        "typeName": {
                            "baseType": {
                                "contractScope": null,
                                "id": 37,
                                "name": "Donation",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 33,
                                "src": "680:8:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Donation_$33_storage_ptr",
                                    "typeString": "struct Dochaintion.Donation"
                                }
                            },
                            "id": 38,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "680:10:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Donation_$33_storage_$dyn_storage_ptr",
                                "typeString": "struct Dochaintion.Donation[]"
                            }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 44,
                        "name": "founderToProject",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 402,
                        "src": "729:46:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                            "typeString": "mapping(address => struct Dochaintion.Project[])"
                        },
                        "typeName": {
                            "id": 43,
                            "keyType": {
                                "id": 40,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "737:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "729:29:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                                "typeString": "mapping(address => struct Dochaintion.Project[])"
                            },
                            "valueType": {
                                "baseType": {
                                    "contractScope": null,
                                    "id": 41,
                                    "name": "Project",
                                    "nodeType": "UserDefinedTypeName",
                                    "referencedDeclaration": 22,
                                    "src": "748:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Project_$22_storage_ptr",
                                        "typeString": "struct Dochaintion.Project"
                                    }
                                },
                                "id": 42,
                                "length": null,
                                "nodeType": "ArrayTypeName",
                                "src": "748:9:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage_ptr",
                                    "typeString": "struct Dochaintion.Project[]"
                                }
                            }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 48,
                        "name": "idToProject",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 402,
                        "src": "782:39:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                            "typeString": "mapping(uint256 => struct Dochaintion.Project)"
                        },
                        "typeName": {
                            "id": 47,
                            "keyType": {
                                "id": 45,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "790:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "782:27:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                                "typeString": "mapping(uint256 => struct Dochaintion.Project)"
                            },
                            "valueType": {
                                "contractScope": null,
                                "id": 46,
                                "name": "Project",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 22,
                                "src": "801:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Project_$22_storage_ptr",
                                    "typeString": "struct Dochaintion.Project"
                                }
                            }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 54,
                        "name": "projectMade",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 53,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 50,
                                    "indexed": false,
                                    "name": "founder",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 54,
                                    "src": "862:15:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 49,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "862:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 52,
                                    "indexed": false,
                                    "name": "madeProject",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 54,
                                    "src": "879:19:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                        "typeString": "struct Dochaintion.Project"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 51,
                                        "name": "Project",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 22,
                                        "src": "879:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Project_$22_storage_ptr",
                                            "typeString": "struct Dochaintion.Project"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "861:38:0"
                        },
                        "src": "844:56:0"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 58,
                        "name": "donationMade",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 57,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 56,
                                    "indexed": false,
                                    "name": "donation",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 58,
                                    "src": "925:17:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Donation_$33_memory_ptr",
                                        "typeString": "struct Dochaintion.Donation"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 55,
                                        "name": "Donation",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 33,
                                        "src": "925:8:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Donation_$33_storage_ptr",
                                            "typeString": "struct Dochaintion.Donation"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "924:19:0"
                        },
                        "src": "906:38:0"
                    },
                    {
                        "constant": true,
                        "functionSelector": "e58378bb",
                        "id": 63,
                        "name": "OWNER_ROLE",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 402,
                        "src": "965:60:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                        },
                        "typeName": {
                            "id": 59,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "965:7:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "value": {
                            "argumentTypes": null,
                            "arguments": [
                                {
                                    "argumentTypes": null,
                                    "hexValue": "4f574e45525f524f4c45",
                                    "id": 61,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1012:12:0",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_b19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e",
                                        "typeString": "literal_string \"OWNER_ROLE\""
                                    },
                                    "value": "OWNER_ROLE"
                                }
                            ],
                            "expression": {
                                "argumentTypes": [
                                    {
                                        "typeIdentifier": "t_stringliteral_b19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e",
                                        "typeString": "literal_string \"OWNER_ROLE\""
                                    }
                                ],
                                "id": 60,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "1002:9:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                            },
                            "id": 62,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1002:23:0",
                            "tryCall": false,
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 73,
                            "nodeType": "Block",
                            "src": "1087:48:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 69,
                                                "name": "OWNER_ROLE",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 63,
                                                "src": "1109:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 70,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 65,
                                                "src": "1121:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 68,
                                            "name": "_setupRole",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 655,
                                            "src": "1098:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                                                "typeString": "function (bytes32,address)"
                                            }
                                        },
                                        "id": 71,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1098:29:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1098:29:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 74,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nodeType": "FunctionDefinition",
                        "overrides": null,
                        "parameters": {
                            "id": 66,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 65,
                                    "name": "owner",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 74,
                                    "src": "1065:13:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 64,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1065:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1064:15:0"
                        },
                        "returnParameters": {
                            "id": 67,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1087:0:0"
                        },
                        "scope": 402,
                        "src": "1053:82:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 140,
                            "nodeType": "Block",
                            "src": "1374:827:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 89,
                                                        "name": "OWNER_ROLE",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 63,
                                                        "src": "1401:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 90,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "1413:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 91,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "1413:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    ],
                                                    "id": 88,
                                                    "name": "hasRole",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 525,
                                                    "src": "1393:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                                                        "typeString": "function (bytes32,address) view returns (bool)"
                                                    }
                                                },
                                                "id": 92,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1393:31:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "43616c6c6572206973206e6f7420746865206f776e6572",
                                                "id": 93,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1426:25:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                                                    "typeString": "literal_string \"Caller is not the owner\""
                                                },
                                                "value": "Caller is not the owner"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                                                    "typeString": "literal_string \"Caller is not the owner\""
                                                }
                                            ],
                                            "id": 87,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "1385:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 94,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1385:67:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 95,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1385:67:0"
                                },
                                {
                                    "assignments": [
                                        97
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 97,
                                            "name": "currentLatestProjectNumber",
                                            "nodeType": "VariableDeclaration",
                                            "overrides": null,
                                            "scope": 140,
                                            "src": "1508:34:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 96,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1508:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 100,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 98,
                                            "name": "projectsList",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 36,
                                            "src": "1545:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                            }
                                        },
                                        "id": 99,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1545:19:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1508:56:0"
                                },
                                {
                                    "assignments": [
                                        102
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 102,
                                            "name": "newProject",
                                            "nodeType": "VariableDeclaration",
                                            "overrides": null,
                                            "scope": 140,
                                            "src": "1624:25:0",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                                "typeString": "struct Dochaintion.Project"
                                            },
                                            "typeName": {
                                                "contractScope": null,
                                                "id": 101,
                                                "name": "Project",
                                                "nodeType": "UserDefinedTypeName",
                                                "referencedDeclaration": 22,
                                                "src": "1624:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_storage_ptr",
                                                    "typeString": "struct Dochaintion.Project"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 113,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 104,
                                                "name": "currentLatestProjectNumber",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 97,
                                                "src": "1691:26:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 105,
                                                "name": "_projectAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 76,
                                                "src": "1736:15:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 106,
                                                "name": "_projectName",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 78,
                                                "src": "1770:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 107,
                                                "name": "_name",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 80,
                                                "src": "1801:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 108,
                                                "name": "_description",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 82,
                                                "src": "1825:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 109,
                                                "name": "_photoCid",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 84,
                                                "src": "1856:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 110,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1884:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "74727565",
                                                "id": 111,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "bool",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1904:4:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "value": "true"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 103,
                                            "name": "Project",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22,
                                            "src": "1665:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_struct$_Project_$22_storage_ptr_$",
                                                "typeString": "type(struct Dochaintion.Project storage pointer)"
                                            }
                                        },
                                        "id": 112,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "structConstructorCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1665:258:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Project_$22_memory",
                                            "typeString": "struct Dochaintion.Project memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1624:299:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 117,
                                                "name": "newProject",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 102,
                                                "src": "1993:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                                    "typeString": "struct Dochaintion.Project memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                                    "typeString": "struct Dochaintion.Project memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 114,
                                                "name": "projectsList",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 36,
                                                "src": "1975:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                }
                                            },
                                            "id": 116,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "1975:17:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Project_$22_storage_$returns$__$",
                                                "typeString": "function (struct Dochaintion.Project storage ref)"
                                            }
                                        },
                                        "id": 118,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1975:29:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 119,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1975:29:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 125,
                                                "name": "newProject",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 102,
                                                "src": "2049:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                                    "typeString": "struct Dochaintion.Project memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                                    "typeString": "struct Dochaintion.Project memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 120,
                                                    "name": "founderToProject",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 44,
                                                    "src": "2015:16:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                                                        "typeString": "mapping(address => struct Dochaintion.Project storage ref[] storage ref)"
                                                    }
                                                },
                                                "id": 123,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 121,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "2032:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 122,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "2032:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "2015:28:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                }
                                            },
                                            "id": 124,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2015:33:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Project_$22_storage_$returns$__$",
                                                "typeString": "function (struct Dochaintion.Project storage ref)"
                                            }
                                        },
                                        "id": 126,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2015:45:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 127,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2015:45:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 132,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 128,
                                                "name": "idToProject",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 48,
                                                "src": "2071:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                                                    "typeString": "mapping(uint256 => struct Dochaintion.Project storage ref)"
                                                }
                                            },
                                            "id": 130,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 129,
                                                "name": "currentLatestProjectNumber",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 97,
                                                "src": "2083:26:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "2071:39:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Project_$22_storage",
                                                "typeString": "struct Dochaintion.Project storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 131,
                                            "name": "newProject",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 102,
                                            "src": "2113:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                                "typeString": "struct Dochaintion.Project memory"
                                            }
                                        },
                                        "src": "2071:52:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Project_$22_storage",
                                            "typeString": "struct Dochaintion.Project storage ref"
                                        }
                                    },
                                    "id": 133,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2071:52:0"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 135,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2170:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 136,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "2170:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 137,
                                                "name": "newProject",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 102,
                                                "src": "2182:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                                    "typeString": "struct Dochaintion.Project memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                                    "typeString": "struct Dochaintion.Project memory"
                                                }
                                            ],
                                            "id": 134,
                                            "name": "projectMade",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 54,
                                            "src": "2158:11:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_struct$_Project_$22_memory_ptr_$returns$__$",
                                                "typeString": "function (address,struct Dochaintion.Project memory)"
                                            }
                                        },
                                        "id": 138,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2158:35:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 139,
                                    "nodeType": "EmitStatement",
                                    "src": "2153:40:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "functionSelector": "d117b217",
                        "id": 141,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "makeProject",
                        "nodeType": "FunctionDefinition",
                        "overrides": null,
                        "parameters": {
                            "id": 85,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 76,
                                    "name": "_projectAddress",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 141,
                                    "src": "1198:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 75,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1198:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 78,
                                    "name": "_projectName",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 141,
                                    "src": "1232:26:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 77,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1232:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 80,
                                    "name": "_name",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 141,
                                    "src": "1269:19:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 79,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1269:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 82,
                                    "name": "_description",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 141,
                                    "src": "1299:26:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 81,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1299:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 84,
                                    "name": "_photoCid",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 141,
                                    "src": "1336:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 83,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1336:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1187:179:0"
                        },
                        "returnParameters": {
                            "id": 86,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1374:0:0"
                        },
                        "scope": 402,
                        "src": "1167:1034:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 224,
                            "nodeType": "Block",
                            "src": "2270:1008:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 150,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 147,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "2351:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 148,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "value",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "2351:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 149,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "2363:1:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "2351:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4e6f204554482073656e64656420666f722066756e64",
                                                "id": 151,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2366:24:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_9e3308fa2b2825d83b932cdb1ef2738d40799e54b8319cbc8b86cf715ebe94ec",
                                                    "typeString": "literal_string \"No ETH sended for fund\""
                                                },
                                                "value": "No ETH sended for fund"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_9e3308fa2b2825d83b932cdb1ef2738d40799e54b8319cbc8b86cf715ebe94ec",
                                                    "typeString": "literal_string \"No ETH sended for fund\""
                                                }
                                            ],
                                            "id": 146,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "2343:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 152,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2343:48:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 153,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2343:48:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 157,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "id": 155,
                                                    "name": "chosenProjectId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 143,
                                                    "src": "2410:15:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 156,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "2429:1:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "2410:20:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4e6f2070726f6a65637420666f756e64",
                                                "id": 158,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2432:18:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_ab65f0646f7656b2f4a759e8a98bff9d9a1582dac202a40e66c44c09a119a5e6",
                                                    "typeString": "literal_string \"No project found\""
                                                },
                                                "value": "No project found"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_ab65f0646f7656b2f4a759e8a98bff9d9a1582dac202a40e66c44c09a119a5e6",
                                                    "typeString": "literal_string \"No project found\""
                                                }
                                            ],
                                            "id": 154,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "2402:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 159,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2402:49:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 160,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2402:49:0"
                                },
                                {
                                    "assignments": [
                                        162,
                                        null
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 162,
                                            "name": "success",
                                            "nodeType": "VariableDeclaration",
                                            "overrides": null,
                                            "scope": 224,
                                            "src": "2511:12:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 161,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2511:4:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        null
                                    ],
                                    "id": 173,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "",
                                                "id": 171,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2627:2:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                    "typeString": "literal_string \"\""
                                                },
                                                "value": ""
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                    "typeString": "literal_string \"\""
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 163,
                                                            "name": "idToProject",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 48,
                                                            "src": "2542:11:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                                                                "typeString": "mapping(uint256 => struct Dochaintion.Project storage ref)"
                                                            }
                                                        },
                                                        "id": 165,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 164,
                                                            "name": "chosenProjectId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 143,
                                                            "src": "2554:15:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "2542:28:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Project_$22_storage",
                                                            "typeString": "struct Dochaintion.Project storage ref"
                                                        }
                                                    },
                                                    "id": 166,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "projectAddress",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 9,
                                                    "src": "2542:43:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 167,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "call",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "2542:48:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                    "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                }
                                            },
                                            "id": 170,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "names": [
                                                "value"
                                            ],
                                            "nodeType": "FunctionCallOptions",
                                            "options": [
                                                {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 168,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "2598:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 169,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "value",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "2598:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "src": "2542:66:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 172,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2542:102:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2510:134:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 175,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 162,
                                                "src": "2663:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "5472616e7366657220776173206e6f742073756363657366756c6c",
                                                "id": 176,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2672:29:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_8a380fcd506f2c1752d40749248608af3bdea22883c566c4d61acd6cfd4a2ce2",
                                                    "typeString": "literal_string \"Transfer was not succesfull\""
                                                },
                                                "value": "Transfer was not succesfull"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_8a380fcd506f2c1752d40749248608af3bdea22883c566c4d61acd6cfd4a2ce2",
                                                    "typeString": "literal_string \"Transfer was not succesfull\""
                                                }
                                            ],
                                            "id": 174,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "2655:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 177,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2655:47:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 178,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2655:47:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 185,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 179,
                                                    "name": "idToProject",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 48,
                                                    "src": "2715:11:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                                                        "typeString": "mapping(uint256 => struct Dochaintion.Project storage ref)"
                                                    }
                                                },
                                                "id": 181,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 180,
                                                    "name": "chosenProjectId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 143,
                                                    "src": "2727:15:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "2715:28:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref"
                                                }
                                            },
                                            "id": 182,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "totalDonation",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 19,
                                            "src": "2715:42:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "+=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 183,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "2761:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 184,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "value",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2761:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2715:55:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 186,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2715:55:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 193,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 187,
                                                    "name": "projectsList",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 36,
                                                    "src": "2781:12:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                        "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                    }
                                                },
                                                "id": 189,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 188,
                                                    "name": "chosenProjectId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 143,
                                                    "src": "2794:15:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "2781:29:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref"
                                                }
                                            },
                                            "id": 190,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "totalDonation",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 19,
                                            "src": "2781:43:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "+=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 191,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "2828:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 192,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "value",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2828:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2781:56:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 194,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2781:56:0"
                                },
                                {
                                    "assignments": [
                                        196
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 196,
                                            "name": "madeDonation",
                                            "nodeType": "VariableDeclaration",
                                            "overrides": null,
                                            "scope": 224,
                                            "src": "2884:28:0",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Donation_$33_memory_ptr",
                                                "typeString": "struct Dochaintion.Donation"
                                            },
                                            "typeName": {
                                                "contractScope": null,
                                                "id": 195,
                                                "name": "Donation",
                                                "nodeType": "UserDefinedTypeName",
                                                "referencedDeclaration": 33,
                                                "src": "2884:8:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Donation_$33_storage_ptr",
                                                    "typeString": "struct Dochaintion.Donation"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 213,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 198,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2955:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 199,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "2955:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 200,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2984:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 201,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "value",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "2984:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 202,
                                                        "name": "idToProject",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 48,
                                                        "src": "3012:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                                                            "typeString": "mapping(uint256 => struct Dochaintion.Project storage ref)"
                                                        }
                                                    },
                                                    "id": 204,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 203,
                                                        "name": "chosenProjectId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 143,
                                                        "src": "3024:15:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "3012:28:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Project_$22_storage",
                                                        "typeString": "struct Dochaintion.Project storage ref"
                                                    }
                                                },
                                                "id": 205,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "projectAddress",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 9,
                                                "src": "3012:43:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 206,
                                                        "name": "idToProject",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 48,
                                                        "src": "3074:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                                                            "typeString": "mapping(uint256 => struct Dochaintion.Project storage ref)"
                                                        }
                                                    },
                                                    "id": 208,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 207,
                                                        "name": "chosenProjectId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 143,
                                                        "src": "3086:15:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "3074:28:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Project_$22_storage",
                                                        "typeString": "struct Dochaintion.Project storage ref"
                                                    }
                                                },
                                                "id": 209,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "projectName",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 11,
                                                "src": "3074:40:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage",
                                                    "typeString": "string storage ref"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 210,
                                                    "name": "block",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -4,
                                                    "src": "3133:5:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_block",
                                                        "typeString": "block"
                                                    }
                                                },
                                                "id": 211,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "timestamp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "3133:15:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_storage",
                                                    "typeString": "string storage ref"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 197,
                                            "name": "Donation",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 33,
                                            "src": "2928:8:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_struct$_Donation_$33_storage_ptr_$",
                                                "typeString": "type(struct Dochaintion.Donation storage pointer)"
                                            }
                                        },
                                        "id": 212,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "structConstructorCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2928:235:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Donation_$33_memory",
                                            "typeString": "struct Dochaintion.Donation memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2884:279:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 217,
                                                "name": "madeDonation",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 196,
                                                "src": "3193:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Donation_$33_memory_ptr",
                                                    "typeString": "struct Dochaintion.Donation memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Donation_$33_memory_ptr",
                                                    "typeString": "struct Dochaintion.Donation memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 214,
                                                "name": "donationsList",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 39,
                                                "src": "3174:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_Donation_$33_storage_$dyn_storage",
                                                    "typeString": "struct Dochaintion.Donation storage ref[] storage ref"
                                                }
                                            },
                                            "id": 216,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "3174:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Donation_$33_storage_$returns$__$",
                                                "typeString": "function (struct Dochaintion.Donation storage ref)"
                                            }
                                        },
                                        "id": 218,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3174:32:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 219,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3174:32:0"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 221,
                                                "name": "madeDonation",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 196,
                                                "src": "3257:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Donation_$33_memory_ptr",
                                                    "typeString": "struct Dochaintion.Donation memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Donation_$33_memory_ptr",
                                                    "typeString": "struct Dochaintion.Donation memory"
                                                }
                                            ],
                                            "id": 220,
                                            "name": "donationMade",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 58,
                                            "src": "3244:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_struct$_Donation_$33_memory_ptr_$returns$__$",
                                                "typeString": "function (struct Dochaintion.Donation memory)"
                                            }
                                        },
                                        "id": 222,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3244:26:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 223,
                                    "nodeType": "EmitStatement",
                                    "src": "3239:31:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "functionSelector": "6c563abe",
                        "id": 225,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "fundProject",
                        "nodeType": "FunctionDefinition",
                        "overrides": null,
                        "parameters": {
                            "id": 144,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 143,
                                    "name": "chosenProjectId",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 225,
                                    "src": "2230:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 142,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2230:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2229:25:0"
                        },
                        "returnParameters": {
                            "id": 145,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2270:0:0"
                        },
                        "scope": 402,
                        "src": "2209:1069:0",
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 233,
                            "nodeType": "Block",
                            "src": "3351:38:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 231,
                                        "name": "projectsList",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 36,
                                        "src": "3369:12:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                            "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 230,
                                    "id": 232,
                                    "nodeType": "Return",
                                    "src": "3362:19:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "functionSelector": "80d03829",
                        "id": 234,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getAllProjects",
                        "nodeType": "FunctionDefinition",
                        "overrides": null,
                        "parameters": {
                            "id": 226,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3309:2:0"
                        },
                        "returnParameters": {
                            "id": 230,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 229,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 234,
                                    "src": "3333:16:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Project_$22_memory_$dyn_memory_ptr",
                                        "typeString": "struct Dochaintion.Project[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "contractScope": null,
                                            "id": 227,
                                            "name": "Project",
                                            "nodeType": "UserDefinedTypeName",
                                            "referencedDeclaration": 22,
                                            "src": "3333:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Project_$22_storage_ptr",
                                                "typeString": "struct Dochaintion.Project"
                                            }
                                        },
                                        "id": 228,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "3333:9:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage_ptr",
                                            "typeString": "struct Dochaintion.Project[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3332:18:0"
                        },
                        "scope": 402,
                        "src": "3286:103:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 253,
                            "nodeType": "Block",
                            "src": "3470:126:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 242,
                                                        "name": "projectsList",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 36,
                                                        "src": "3489:12:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                            "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                        }
                                                    },
                                                    "id": 244,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 243,
                                                        "name": "number",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 236,
                                                        "src": "3502:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "3489:20:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Project_$22_storage",
                                                        "typeString": "struct Dochaintion.Project storage ref"
                                                    }
                                                },
                                                "id": 245,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "isActive",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21,
                                                "src": "3489:29:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "20546869732070726f6a65637420697320696e616374697665",
                                                "id": 246,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3520:27:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_6b1d1a63284be567379b3762091bababc0dace80fa4e6557f3511b65653216a0",
                                                    "typeString": "literal_string \" This project is inactive\""
                                                },
                                                "value": " This project is inactive"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_6b1d1a63284be567379b3762091bababc0dace80fa4e6557f3511b65653216a0",
                                                    "typeString": "literal_string \" This project is inactive\""
                                                }
                                            ],
                                            "id": 241,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3481:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 247,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3481:67:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 248,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3481:67:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 249,
                                            "name": "projectsList",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 36,
                                            "src": "3568:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                            }
                                        },
                                        "id": 251,
                                        "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 250,
                                            "name": "number",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 236,
                                            "src": "3581:6:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "3568:20:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Project_$22_storage",
                                            "typeString": "struct Dochaintion.Project storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 240,
                                    "id": 252,
                                    "nodeType": "Return",
                                    "src": "3561:27:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "functionSelector": "f0f3f2c8",
                        "id": 254,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getProject",
                        "nodeType": "FunctionDefinition",
                        "overrides": null,
                        "parameters": {
                            "id": 237,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 236,
                                    "name": "number",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 254,
                                    "src": "3417:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 235,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3417:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3416:16:0"
                        },
                        "returnParameters": {
                            "id": 240,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 239,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 254,
                                    "src": "3454:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                        "typeString": "struct Dochaintion.Project"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 238,
                                        "name": "Project",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 22,
                                        "src": "3454:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Project_$22_storage_ptr",
                                            "typeString": "struct Dochaintion.Project"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3453:16:0"
                        },
                        "scope": 402,
                        "src": "3397:199:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 262,
                            "nodeType": "Block",
                            "src": "3671:39:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 260,
                                        "name": "donationsList",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 39,
                                        "src": "3689:13:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Donation_$33_storage_$dyn_storage",
                                            "typeString": "struct Dochaintion.Donation storage ref[] storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 259,
                                    "id": 261,
                                    "nodeType": "Return",
                                    "src": "3682:20:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "functionSelector": "38a59a07",
                        "id": 263,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getAllDonations",
                        "nodeType": "FunctionDefinition",
                        "overrides": null,
                        "parameters": {
                            "id": 255,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3628:2:0"
                        },
                        "returnParameters": {
                            "id": 259,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 258,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 263,
                                    "src": "3652:17:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Donation_$33_memory_$dyn_memory_ptr",
                                        "typeString": "struct Dochaintion.Donation[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "contractScope": null,
                                            "id": 256,
                                            "name": "Donation",
                                            "nodeType": "UserDefinedTypeName",
                                            "referencedDeclaration": 33,
                                            "src": "3652:8:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Donation_$33_storage_ptr",
                                                "typeString": "struct Dochaintion.Donation"
                                            }
                                        },
                                        "id": 257,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "3652:10:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Donation_$33_storage_$dyn_storage_ptr",
                                            "typeString": "struct Dochaintion.Donation[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3651:19:0"
                        },
                        "scope": 402,
                        "src": "3604:106:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 331,
                            "nodeType": "Block",
                            "src": "3766:453:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 270,
                                                        "name": "OWNER_ROLE",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 63,
                                                        "src": "3793:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 271,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "3805:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 272,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "3805:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    ],
                                                    "id": 269,
                                                    "name": "hasRole",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 525,
                                                    "src": "3785:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                                                        "typeString": "function (bytes32,address) view returns (bool)"
                                                    }
                                                },
                                                "id": 273,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3785:31:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "43616c6c6572206973206e6f7420746865206f776e6572",
                                                "id": 274,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3818:25:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                                                    "typeString": "literal_string \"Caller is not the owner\""
                                                },
                                                "value": "Caller is not the owner"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                                                    "typeString": "literal_string \"Caller is not the owner\""
                                                }
                                            ],
                                            "id": 268,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3777:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 275,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3777:67:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 276,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3777:67:0"
                                },
                                {
                                    "assignments": [
                                        278
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 278,
                                            "name": "caller",
                                            "nodeType": "VariableDeclaration",
                                            "overrides": null,
                                            "scope": 331,
                                            "src": "3855:14:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "typeName": {
                                                "id": 277,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3855:7:0",
                                                "stateMutability": "nonpayable",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 281,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 279,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -15,
                                            "src": "3872:3:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                            }
                                        },
                                        "id": 280,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "3872:10:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3855:27:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 287,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 282,
                                                    "name": "projectsList",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 36,
                                                    "src": "3893:12:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                        "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                    }
                                                },
                                                "id": 284,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 283,
                                                    "name": "number",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 265,
                                                    "src": "3906:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "3893:20:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref"
                                                }
                                            },
                                            "id": 285,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "isActive",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 21,
                                            "src": "3893:29:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "66616c7365",
                                            "id": 286,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3925:5:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "false"
                                        },
                                        "src": "3893:37:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 288,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3893:37:0"
                                },
                                {
                                    "body": {
                                        "id": 322,
                                        "nodeType": "Block",
                                        "src": "4007:158:0",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 310,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "baseExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 303,
                                                                    "name": "founderToProject",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 44,
                                                                    "src": "4026:16:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                                                                        "typeString": "mapping(address => struct Dochaintion.Project storage ref[] storage ref)"
                                                                    }
                                                                },
                                                                "id": 305,
                                                                "indexExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 304,
                                                                    "name": "caller",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 278,
                                                                    "src": "4043:6:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "IndexAccess",
                                                                "src": "4026:24:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                                    "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                                }
                                                            },
                                                            "id": 307,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 306,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 290,
                                                                "src": "4051:1:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "4026:27:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Project_$22_storage",
                                                                "typeString": "struct Dochaintion.Project storage ref"
                                                            }
                                                        },
                                                        "id": 308,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "projectId",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7,
                                                        "src": "4026:37:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 309,
                                                        "name": "number",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 265,
                                                        "src": "4067:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4026:47:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": null,
                                                "id": 321,
                                                "nodeType": "IfStatement",
                                                "src": "4022:132:0",
                                                "trueBody": {
                                                    "id": 320,
                                                    "nodeType": "Block",
                                                    "src": "4075:79:0",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 318,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "argumentTypes": null,
                                                                    "expression": {
                                                                        "argumentTypes": null,
                                                                        "baseExpression": {
                                                                            "argumentTypes": null,
                                                                            "baseExpression": {
                                                                                "argumentTypes": null,
                                                                                "id": 311,
                                                                                "name": "founderToProject",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 44,
                                                                                "src": "4094:16:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                                                                                    "typeString": "mapping(address => struct Dochaintion.Project storage ref[] storage ref)"
                                                                                }
                                                                            },
                                                                            "id": 314,
                                                                            "indexExpression": {
                                                                                "argumentTypes": null,
                                                                                "id": 312,
                                                                                "name": "caller",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 278,
                                                                                "src": "4111:6:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_address",
                                                                                    "typeString": "address"
                                                                                }
                                                                            },
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "IndexAccess",
                                                                            "src": "4094:24:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                                                "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                                            }
                                                                        },
                                                                        "id": 315,
                                                                        "indexExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 313,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 290,
                                                                            "src": "4119:1:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "isConstant": false,
                                                                        "isLValue": true,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "IndexAccess",
                                                                        "src": "4094:27:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_struct$_Project_$22_storage",
                                                                            "typeString": "struct Dochaintion.Project storage ref"
                                                                        }
                                                                    },
                                                                    "id": 316,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "memberName": "isActive",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 21,
                                                                    "src": "4094:36:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bool",
                                                                        "typeString": "bool"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "argumentTypes": null,
                                                                    "hexValue": "66616c7365",
                                                                    "id": 317,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "bool",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "4133:5:0",
                                                                    "subdenomination": null,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bool",
                                                                        "typeString": "bool"
                                                                    },
                                                                    "value": "false"
                                                                },
                                                                "src": "4094:44:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            "id": 319,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "4094:44:0"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 299,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 293,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 290,
                                            "src": "3961:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 294,
                                                    "name": "founderToProject",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 44,
                                                    "src": "3965:16:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                                                        "typeString": "mapping(address => struct Dochaintion.Project storage ref[] storage ref)"
                                                    }
                                                },
                                                "id": 297,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 295,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "3982:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 296,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "3982:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "3965:28:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                }
                                            },
                                            "id": 298,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "3965:35:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3961:39:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 323,
                                    "initializationExpression": {
                                        "assignments": [
                                            290
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 290,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "overrides": null,
                                                "scope": 323,
                                                "src": "3946:9:0",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 289,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "3946:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 292,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 291,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3958:1:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "3946:13:0"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 301,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "4002:3:0",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 300,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 290,
                                                "src": "4002:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 302,
                                        "nodeType": "ExpressionStatement",
                                        "src": "4002:3:0"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "3941:224:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 329,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 324,
                                                    "name": "idToProject",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 48,
                                                    "src": "4175:11:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                                                        "typeString": "mapping(uint256 => struct Dochaintion.Project storage ref)"
                                                    }
                                                },
                                                "id": 326,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 325,
                                                    "name": "number",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 265,
                                                    "src": "4187:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "4175:19:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref"
                                                }
                                            },
                                            "id": 327,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "isActive",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 21,
                                            "src": "4175:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "66616c7365",
                                            "id": 328,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4206:5:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "false"
                                        },
                                        "src": "4175:36:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 330,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4175:36:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "functionSelector": "ca42b72c",
                        "id": 332,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deactiveProject",
                        "nodeType": "FunctionDefinition",
                        "overrides": null,
                        "parameters": {
                            "id": 266,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 265,
                                    "name": "number",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 332,
                                    "src": "3743:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 264,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3743:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3742:16:0"
                        },
                        "returnParameters": {
                            "id": 267,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3766:0:0"
                        },
                        "scope": 402,
                        "src": "3718:501:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 400,
                            "nodeType": "Block",
                            "src": "4275:450:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 339,
                                                        "name": "OWNER_ROLE",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 63,
                                                        "src": "4302:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 340,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "4314:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 341,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "4314:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    ],
                                                    "id": 338,
                                                    "name": "hasRole",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 525,
                                                    "src": "4294:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                                                        "typeString": "function (bytes32,address) view returns (bool)"
                                                    }
                                                },
                                                "id": 342,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4294:31:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "43616c6c6572206973206e6f7420746865206f776e6572",
                                                "id": 343,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4327:25:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                                                    "typeString": "literal_string \"Caller is not the owner\""
                                                },
                                                "value": "Caller is not the owner"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                                                    "typeString": "literal_string \"Caller is not the owner\""
                                                }
                                            ],
                                            "id": 337,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4286:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 344,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4286:67:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 345,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4286:67:0"
                                },
                                {
                                    "assignments": [
                                        347
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 347,
                                            "name": "caller",
                                            "nodeType": "VariableDeclaration",
                                            "overrides": null,
                                            "scope": 400,
                                            "src": "4364:14:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "typeName": {
                                                "id": 346,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4364:7:0",
                                                "stateMutability": "nonpayable",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 350,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 348,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -15,
                                            "src": "4381:3:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                            }
                                        },
                                        "id": 349,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "4381:10:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4364:27:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 356,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 351,
                                                    "name": "projectsList",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 36,
                                                    "src": "4402:12:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                        "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                    }
                                                },
                                                "id": 353,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 352,
                                                    "name": "number",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 334,
                                                    "src": "4415:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "4402:20:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref"
                                                }
                                            },
                                            "id": 354,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "isActive",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 21,
                                            "src": "4402:29:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "74727565",
                                            "id": 355,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4434:4:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "4402:36:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 357,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4402:36:0"
                                },
                                {
                                    "body": {
                                        "id": 391,
                                        "nodeType": "Block",
                                        "src": "4515:157:0",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 379,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "baseExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 372,
                                                                    "name": "founderToProject",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 44,
                                                                    "src": "4534:16:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                                                                        "typeString": "mapping(address => struct Dochaintion.Project storage ref[] storage ref)"
                                                                    }
                                                                },
                                                                "id": 374,
                                                                "indexExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 373,
                                                                    "name": "caller",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 347,
                                                                    "src": "4551:6:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "IndexAccess",
                                                                "src": "4534:24:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                                    "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                                }
                                                            },
                                                            "id": 376,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 375,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 359,
                                                                "src": "4559:1:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "4534:27:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Project_$22_storage",
                                                                "typeString": "struct Dochaintion.Project storage ref"
                                                            }
                                                        },
                                                        "id": 377,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "projectId",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7,
                                                        "src": "4534:37:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 378,
                                                        "name": "number",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 334,
                                                        "src": "4575:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4534:47:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": null,
                                                "id": 390,
                                                "nodeType": "IfStatement",
                                                "src": "4530:131:0",
                                                "trueBody": {
                                                    "id": 389,
                                                    "nodeType": "Block",
                                                    "src": "4583:78:0",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 387,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "argumentTypes": null,
                                                                    "expression": {
                                                                        "argumentTypes": null,
                                                                        "baseExpression": {
                                                                            "argumentTypes": null,
                                                                            "baseExpression": {
                                                                                "argumentTypes": null,
                                                                                "id": 380,
                                                                                "name": "founderToProject",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 44,
                                                                                "src": "4602:16:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                                                                                    "typeString": "mapping(address => struct Dochaintion.Project storage ref[] storage ref)"
                                                                                }
                                                                            },
                                                                            "id": 383,
                                                                            "indexExpression": {
                                                                                "argumentTypes": null,
                                                                                "id": 381,
                                                                                "name": "caller",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 347,
                                                                                "src": "4619:6:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_address",
                                                                                    "typeString": "address"
                                                                                }
                                                                            },
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "IndexAccess",
                                                                            "src": "4602:24:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                                                "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                                            }
                                                                        },
                                                                        "id": 384,
                                                                        "indexExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 382,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 359,
                                                                            "src": "4627:1:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "isConstant": false,
                                                                        "isLValue": true,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "IndexAccess",
                                                                        "src": "4602:27:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_struct$_Project_$22_storage",
                                                                            "typeString": "struct Dochaintion.Project storage ref"
                                                                        }
                                                                    },
                                                                    "id": 385,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "memberName": "isActive",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 21,
                                                                    "src": "4602:36:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bool",
                                                                        "typeString": "bool"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "argumentTypes": null,
                                                                    "hexValue": "74727565",
                                                                    "id": 386,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "bool",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "4641:4:0",
                                                                    "subdenomination": null,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bool",
                                                                        "typeString": "bool"
                                                                    },
                                                                    "value": "true"
                                                                },
                                                                "src": "4602:43:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            "id": 388,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "4602:43:0"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 368,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 362,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 359,
                                            "src": "4469:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 363,
                                                    "name": "founderToProject",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 44,
                                                    "src": "4473:16:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                                                        "typeString": "mapping(address => struct Dochaintion.Project storage ref[] storage ref)"
                                                    }
                                                },
                                                "id": 366,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 364,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "4490:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 365,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "4490:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "4473:28:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                }
                                            },
                                            "id": 367,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "4473:35:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4469:39:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 392,
                                    "initializationExpression": {
                                        "assignments": [
                                            359
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 359,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "overrides": null,
                                                "scope": 392,
                                                "src": "4454:9:0",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 358,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "4454:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 361,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 360,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4466:1:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "4454:13:0"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 370,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "4510:3:0",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 369,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 359,
                                                "src": "4510:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 371,
                                        "nodeType": "ExpressionStatement",
                                        "src": "4510:3:0"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "4449:223:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 398,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 393,
                                                    "name": "idToProject",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 48,
                                                    "src": "4682:11:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                                                        "typeString": "mapping(uint256 => struct Dochaintion.Project storage ref)"
                                                    }
                                                },
                                                "id": 395,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 394,
                                                    "name": "number",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 334,
                                                    "src": "4694:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "4682:19:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref"
                                                }
                                            },
                                            "id": 396,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "isActive",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 21,
                                            "src": "4682:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "74727565",
                                            "id": 397,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4713:4:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "4682:35:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 399,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4682:35:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "functionSelector": "41544a82",
                        "id": 401,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "activateProject",
                        "nodeType": "FunctionDefinition",
                        "overrides": null,
                        "parameters": {
                            "id": 335,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 334,
                                    "name": "number",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 401,
                                    "src": "4252:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 333,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4252:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4251:16:0"
                        },
                        "returnParameters": {
                            "id": 336,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4275:0:0"
                        },
                        "scope": 402,
                        "src": "4227:498:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "scope": 403,
                "src": "155:4573:0"
            }
        ],
        "src": "33:4697:0"
    },
    "legacyAST": {
        "absolutePath": "/C/Users/Aron/Documents/GitHub/DonationPlatform/TruffleContract/contracts/Dochaintion.sol",
        "exportedSymbols": {
            "Dochaintion": [
                402
            ]
        },
        "id": 403,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1,
                "literals": [
                    "solidity",
                    "^",
                    "0.6",
                    ".0"
                ],
                "nodeType": "PragmaDirective",
                "src": "33:23:0"
            },
            {
                "id": 2,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "58:33:0"
            },
            {
                "absolutePath": "@openzeppelin/contracts/access/AccessControl.sol",
                "file": "@openzeppelin/contracts/access/AccessControl.sol",
                "id": 3,
                "nodeType": "ImportDirective",
                "scope": 403,
                "sourceUnit": 729,
                "src": "93:58:0",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "abstract": false,
                "baseContracts": [
                    {
                        "arguments": null,
                        "baseName": {
                            "contractScope": null,
                            "id": 4,
                            "name": "AccessControl",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 728,
                            "src": "179:13:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AccessControl_$728",
                                "typeString": "contract AccessControl"
                            }
                        },
                        "id": 5,
                        "nodeType": "InheritanceSpecifier",
                        "src": "179:13:0"
                    }
                ],
                "contractDependencies": [
                    458,
                    728
                ],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "id": 402,
                "linearizedBaseContracts": [
                    402,
                    728,
                    458
                ],
                "name": "Dochaintion",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "canonicalName": "Dochaintion.Project",
                        "id": 22,
                        "members": [
                            {
                                "constant": false,
                                "id": 7,
                                "name": "projectId",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 22,
                                "src": "241:17:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 6,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "241:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 9,
                                "name": "projectAddress",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 22,
                                "src": "269:22:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 8,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "269:7:0",
                                    "stateMutability": "nonpayable",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 11,
                                "name": "projectName",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 22,
                                "src": "302:18:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 10,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "302:6:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 13,
                                "name": "name",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 22,
                                "src": "331:11:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 12,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "331:6:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 15,
                                "name": "description",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 22,
                                "src": "353:18:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 14,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "353:6:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 17,
                                "name": "photoCid",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 22,
                                "src": "382:15:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 16,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "382:6:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 19,
                                "name": "totalDonation",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 22,
                                "src": "408:21:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 18,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "408:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 21,
                                "name": "isActive",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 22,
                                "src": "440:13:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 20,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "440:4:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }
                        ],
                        "name": "Project",
                        "nodeType": "StructDefinition",
                        "scope": 402,
                        "src": "215:246:0",
                        "visibility": "public"
                    },
                    {
                        "canonicalName": "Dochaintion.Donation",
                        "id": 33,
                        "members": [
                            {
                                "constant": false,
                                "id": 24,
                                "name": "donator",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 33,
                                "src": "496:15:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 23,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "496:7:0",
                                    "stateMutability": "nonpayable",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 26,
                                "name": "amount",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 33,
                                "src": "522:14:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 25,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "522:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 28,
                                "name": "projectAddress",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 33,
                                "src": "547:22:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 27,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "547:7:0",
                                    "stateMutability": "nonpayable",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 30,
                                "name": "projectName",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 33,
                                "src": "580:18:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 29,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "580:6:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 32,
                                "name": "date",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 33,
                                "src": "609:12:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 31,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "609:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }
                        ],
                        "name": "Donation",
                        "nodeType": "StructDefinition",
                        "scope": 402,
                        "src": "469:160:0",
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 36,
                        "name": "projectsList",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 402,
                        "src": "651:22:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                            "typeString": "struct Dochaintion.Project[]"
                        },
                        "typeName": {
                            "baseType": {
                                "contractScope": null,
                                "id": 34,
                                "name": "Project",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 22,
                                "src": "651:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Project_$22_storage_ptr",
                                    "typeString": "struct Dochaintion.Project"
                                }
                            },
                            "id": 35,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "651:9:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage_ptr",
                                "typeString": "struct Dochaintion.Project[]"
                            }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 39,
                        "name": "donationsList",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 402,
                        "src": "680:24:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Donation_$33_storage_$dyn_storage",
                            "typeString": "struct Dochaintion.Donation[]"
                        },
                        "typeName": {
                            "baseType": {
                                "contractScope": null,
                                "id": 37,
                                "name": "Donation",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 33,
                                "src": "680:8:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Donation_$33_storage_ptr",
                                    "typeString": "struct Dochaintion.Donation"
                                }
                            },
                            "id": 38,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "680:10:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Donation_$33_storage_$dyn_storage_ptr",
                                "typeString": "struct Dochaintion.Donation[]"
                            }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 44,
                        "name": "founderToProject",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 402,
                        "src": "729:46:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                            "typeString": "mapping(address => struct Dochaintion.Project[])"
                        },
                        "typeName": {
                            "id": 43,
                            "keyType": {
                                "id": 40,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "737:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "729:29:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                                "typeString": "mapping(address => struct Dochaintion.Project[])"
                            },
                            "valueType": {
                                "baseType": {
                                    "contractScope": null,
                                    "id": 41,
                                    "name": "Project",
                                    "nodeType": "UserDefinedTypeName",
                                    "referencedDeclaration": 22,
                                    "src": "748:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Project_$22_storage_ptr",
                                        "typeString": "struct Dochaintion.Project"
                                    }
                                },
                                "id": 42,
                                "length": null,
                                "nodeType": "ArrayTypeName",
                                "src": "748:9:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage_ptr",
                                    "typeString": "struct Dochaintion.Project[]"
                                }
                            }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 48,
                        "name": "idToProject",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 402,
                        "src": "782:39:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                            "typeString": "mapping(uint256 => struct Dochaintion.Project)"
                        },
                        "typeName": {
                            "id": 47,
                            "keyType": {
                                "id": 45,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "790:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "782:27:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                                "typeString": "mapping(uint256 => struct Dochaintion.Project)"
                            },
                            "valueType": {
                                "contractScope": null,
                                "id": 46,
                                "name": "Project",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 22,
                                "src": "801:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Project_$22_storage_ptr",
                                    "typeString": "struct Dochaintion.Project"
                                }
                            }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 54,
                        "name": "projectMade",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 53,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 50,
                                    "indexed": false,
                                    "name": "founder",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 54,
                                    "src": "862:15:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 49,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "862:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 52,
                                    "indexed": false,
                                    "name": "madeProject",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 54,
                                    "src": "879:19:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                        "typeString": "struct Dochaintion.Project"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 51,
                                        "name": "Project",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 22,
                                        "src": "879:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Project_$22_storage_ptr",
                                            "typeString": "struct Dochaintion.Project"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "861:38:0"
                        },
                        "src": "844:56:0"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 58,
                        "name": "donationMade",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 57,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 56,
                                    "indexed": false,
                                    "name": "donation",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 58,
                                    "src": "925:17:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Donation_$33_memory_ptr",
                                        "typeString": "struct Dochaintion.Donation"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 55,
                                        "name": "Donation",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 33,
                                        "src": "925:8:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Donation_$33_storage_ptr",
                                            "typeString": "struct Dochaintion.Donation"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "924:19:0"
                        },
                        "src": "906:38:0"
                    },
                    {
                        "constant": true,
                        "functionSelector": "e58378bb",
                        "id": 63,
                        "name": "OWNER_ROLE",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 402,
                        "src": "965:60:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                        },
                        "typeName": {
                            "id": 59,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "965:7:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "value": {
                            "argumentTypes": null,
                            "arguments": [
                                {
                                    "argumentTypes": null,
                                    "hexValue": "4f574e45525f524f4c45",
                                    "id": 61,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1012:12:0",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_b19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e",
                                        "typeString": "literal_string \"OWNER_ROLE\""
                                    },
                                    "value": "OWNER_ROLE"
                                }
                            ],
                            "expression": {
                                "argumentTypes": [
                                    {
                                        "typeIdentifier": "t_stringliteral_b19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e",
                                        "typeString": "literal_string \"OWNER_ROLE\""
                                    }
                                ],
                                "id": 60,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "1002:9:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                            },
                            "id": 62,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1002:23:0",
                            "tryCall": false,
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 73,
                            "nodeType": "Block",
                            "src": "1087:48:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 69,
                                                "name": "OWNER_ROLE",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 63,
                                                "src": "1109:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 70,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 65,
                                                "src": "1121:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 68,
                                            "name": "_setupRole",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 655,
                                            "src": "1098:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                                                "typeString": "function (bytes32,address)"
                                            }
                                        },
                                        "id": 71,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1098:29:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1098:29:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 74,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nodeType": "FunctionDefinition",
                        "overrides": null,
                        "parameters": {
                            "id": 66,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 65,
                                    "name": "owner",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 74,
                                    "src": "1065:13:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 64,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1065:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1064:15:0"
                        },
                        "returnParameters": {
                            "id": 67,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1087:0:0"
                        },
                        "scope": 402,
                        "src": "1053:82:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 140,
                            "nodeType": "Block",
                            "src": "1374:827:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 89,
                                                        "name": "OWNER_ROLE",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 63,
                                                        "src": "1401:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 90,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "1413:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 91,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "1413:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    ],
                                                    "id": 88,
                                                    "name": "hasRole",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 525,
                                                    "src": "1393:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                                                        "typeString": "function (bytes32,address) view returns (bool)"
                                                    }
                                                },
                                                "id": 92,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1393:31:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "43616c6c6572206973206e6f7420746865206f776e6572",
                                                "id": 93,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1426:25:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                                                    "typeString": "literal_string \"Caller is not the owner\""
                                                },
                                                "value": "Caller is not the owner"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                                                    "typeString": "literal_string \"Caller is not the owner\""
                                                }
                                            ],
                                            "id": 87,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "1385:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 94,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1385:67:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 95,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1385:67:0"
                                },
                                {
                                    "assignments": [
                                        97
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 97,
                                            "name": "currentLatestProjectNumber",
                                            "nodeType": "VariableDeclaration",
                                            "overrides": null,
                                            "scope": 140,
                                            "src": "1508:34:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 96,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1508:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 100,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 98,
                                            "name": "projectsList",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 36,
                                            "src": "1545:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                            }
                                        },
                                        "id": 99,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1545:19:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1508:56:0"
                                },
                                {
                                    "assignments": [
                                        102
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 102,
                                            "name": "newProject",
                                            "nodeType": "VariableDeclaration",
                                            "overrides": null,
                                            "scope": 140,
                                            "src": "1624:25:0",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                                "typeString": "struct Dochaintion.Project"
                                            },
                                            "typeName": {
                                                "contractScope": null,
                                                "id": 101,
                                                "name": "Project",
                                                "nodeType": "UserDefinedTypeName",
                                                "referencedDeclaration": 22,
                                                "src": "1624:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_storage_ptr",
                                                    "typeString": "struct Dochaintion.Project"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 113,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 104,
                                                "name": "currentLatestProjectNumber",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 97,
                                                "src": "1691:26:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 105,
                                                "name": "_projectAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 76,
                                                "src": "1736:15:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 106,
                                                "name": "_projectName",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 78,
                                                "src": "1770:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 107,
                                                "name": "_name",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 80,
                                                "src": "1801:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 108,
                                                "name": "_description",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 82,
                                                "src": "1825:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 109,
                                                "name": "_photoCid",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 84,
                                                "src": "1856:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 110,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1884:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "74727565",
                                                "id": 111,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "bool",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1904:4:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "value": "true"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 103,
                                            "name": "Project",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22,
                                            "src": "1665:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_struct$_Project_$22_storage_ptr_$",
                                                "typeString": "type(struct Dochaintion.Project storage pointer)"
                                            }
                                        },
                                        "id": 112,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "structConstructorCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1665:258:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Project_$22_memory",
                                            "typeString": "struct Dochaintion.Project memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1624:299:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 117,
                                                "name": "newProject",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 102,
                                                "src": "1993:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                                    "typeString": "struct Dochaintion.Project memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                                    "typeString": "struct Dochaintion.Project memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 114,
                                                "name": "projectsList",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 36,
                                                "src": "1975:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                }
                                            },
                                            "id": 116,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "1975:17:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Project_$22_storage_$returns$__$",
                                                "typeString": "function (struct Dochaintion.Project storage ref)"
                                            }
                                        },
                                        "id": 118,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1975:29:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 119,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1975:29:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 125,
                                                "name": "newProject",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 102,
                                                "src": "2049:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                                    "typeString": "struct Dochaintion.Project memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                                    "typeString": "struct Dochaintion.Project memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 120,
                                                    "name": "founderToProject",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 44,
                                                    "src": "2015:16:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                                                        "typeString": "mapping(address => struct Dochaintion.Project storage ref[] storage ref)"
                                                    }
                                                },
                                                "id": 123,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 121,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "2032:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 122,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "2032:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "2015:28:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                }
                                            },
                                            "id": 124,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2015:33:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Project_$22_storage_$returns$__$",
                                                "typeString": "function (struct Dochaintion.Project storage ref)"
                                            }
                                        },
                                        "id": 126,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2015:45:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 127,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2015:45:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 132,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 128,
                                                "name": "idToProject",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 48,
                                                "src": "2071:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                                                    "typeString": "mapping(uint256 => struct Dochaintion.Project storage ref)"
                                                }
                                            },
                                            "id": 130,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 129,
                                                "name": "currentLatestProjectNumber",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 97,
                                                "src": "2083:26:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "2071:39:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Project_$22_storage",
                                                "typeString": "struct Dochaintion.Project storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 131,
                                            "name": "newProject",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 102,
                                            "src": "2113:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                                "typeString": "struct Dochaintion.Project memory"
                                            }
                                        },
                                        "src": "2071:52:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Project_$22_storage",
                                            "typeString": "struct Dochaintion.Project storage ref"
                                        }
                                    },
                                    "id": 133,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2071:52:0"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 135,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2170:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 136,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "2170:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 137,
                                                "name": "newProject",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 102,
                                                "src": "2182:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                                    "typeString": "struct Dochaintion.Project memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                                    "typeString": "struct Dochaintion.Project memory"
                                                }
                                            ],
                                            "id": 134,
                                            "name": "projectMade",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 54,
                                            "src": "2158:11:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_struct$_Project_$22_memory_ptr_$returns$__$",
                                                "typeString": "function (address,struct Dochaintion.Project memory)"
                                            }
                                        },
                                        "id": 138,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2158:35:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 139,
                                    "nodeType": "EmitStatement",
                                    "src": "2153:40:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "functionSelector": "d117b217",
                        "id": 141,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "makeProject",
                        "nodeType": "FunctionDefinition",
                        "overrides": null,
                        "parameters": {
                            "id": 85,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 76,
                                    "name": "_projectAddress",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 141,
                                    "src": "1198:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 75,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1198:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 78,
                                    "name": "_projectName",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 141,
                                    "src": "1232:26:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 77,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1232:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 80,
                                    "name": "_name",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 141,
                                    "src": "1269:19:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 79,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1269:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 82,
                                    "name": "_description",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 141,
                                    "src": "1299:26:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 81,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1299:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 84,
                                    "name": "_photoCid",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 141,
                                    "src": "1336:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 83,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1336:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1187:179:0"
                        },
                        "returnParameters": {
                            "id": 86,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1374:0:0"
                        },
                        "scope": 402,
                        "src": "1167:1034:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 224,
                            "nodeType": "Block",
                            "src": "2270:1008:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 150,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 147,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "2351:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 148,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "value",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "2351:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 149,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "2363:1:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "2351:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4e6f204554482073656e64656420666f722066756e64",
                                                "id": 151,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2366:24:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_9e3308fa2b2825d83b932cdb1ef2738d40799e54b8319cbc8b86cf715ebe94ec",
                                                    "typeString": "literal_string \"No ETH sended for fund\""
                                                },
                                                "value": "No ETH sended for fund"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_9e3308fa2b2825d83b932cdb1ef2738d40799e54b8319cbc8b86cf715ebe94ec",
                                                    "typeString": "literal_string \"No ETH sended for fund\""
                                                }
                                            ],
                                            "id": 146,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "2343:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 152,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2343:48:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 153,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2343:48:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 157,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "id": 155,
                                                    "name": "chosenProjectId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 143,
                                                    "src": "2410:15:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 156,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "2429:1:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "2410:20:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4e6f2070726f6a65637420666f756e64",
                                                "id": 158,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2432:18:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_ab65f0646f7656b2f4a759e8a98bff9d9a1582dac202a40e66c44c09a119a5e6",
                                                    "typeString": "literal_string \"No project found\""
                                                },
                                                "value": "No project found"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_ab65f0646f7656b2f4a759e8a98bff9d9a1582dac202a40e66c44c09a119a5e6",
                                                    "typeString": "literal_string \"No project found\""
                                                }
                                            ],
                                            "id": 154,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "2402:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 159,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2402:49:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 160,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2402:49:0"
                                },
                                {
                                    "assignments": [
                                        162,
                                        null
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 162,
                                            "name": "success",
                                            "nodeType": "VariableDeclaration",
                                            "overrides": null,
                                            "scope": 224,
                                            "src": "2511:12:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 161,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2511:4:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        null
                                    ],
                                    "id": 173,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "",
                                                "id": 171,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2627:2:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                    "typeString": "literal_string \"\""
                                                },
                                                "value": ""
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                    "typeString": "literal_string \"\""
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 163,
                                                            "name": "idToProject",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 48,
                                                            "src": "2542:11:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                                                                "typeString": "mapping(uint256 => struct Dochaintion.Project storage ref)"
                                                            }
                                                        },
                                                        "id": 165,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 164,
                                                            "name": "chosenProjectId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 143,
                                                            "src": "2554:15:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "2542:28:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Project_$22_storage",
                                                            "typeString": "struct Dochaintion.Project storage ref"
                                                        }
                                                    },
                                                    "id": 166,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "projectAddress",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 9,
                                                    "src": "2542:43:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 167,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "call",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "2542:48:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                    "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                }
                                            },
                                            "id": 170,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "names": [
                                                "value"
                                            ],
                                            "nodeType": "FunctionCallOptions",
                                            "options": [
                                                {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 168,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "2598:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 169,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "value",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "2598:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "src": "2542:66:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 172,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2542:102:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2510:134:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 175,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 162,
                                                "src": "2663:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "5472616e7366657220776173206e6f742073756363657366756c6c",
                                                "id": 176,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2672:29:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_8a380fcd506f2c1752d40749248608af3bdea22883c566c4d61acd6cfd4a2ce2",
                                                    "typeString": "literal_string \"Transfer was not succesfull\""
                                                },
                                                "value": "Transfer was not succesfull"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_8a380fcd506f2c1752d40749248608af3bdea22883c566c4d61acd6cfd4a2ce2",
                                                    "typeString": "literal_string \"Transfer was not succesfull\""
                                                }
                                            ],
                                            "id": 174,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "2655:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 177,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2655:47:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 178,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2655:47:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 185,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 179,
                                                    "name": "idToProject",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 48,
                                                    "src": "2715:11:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                                                        "typeString": "mapping(uint256 => struct Dochaintion.Project storage ref)"
                                                    }
                                                },
                                                "id": 181,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 180,
                                                    "name": "chosenProjectId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 143,
                                                    "src": "2727:15:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "2715:28:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref"
                                                }
                                            },
                                            "id": 182,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "totalDonation",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 19,
                                            "src": "2715:42:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "+=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 183,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "2761:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 184,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "value",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2761:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2715:55:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 186,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2715:55:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 193,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 187,
                                                    "name": "projectsList",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 36,
                                                    "src": "2781:12:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                        "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                    }
                                                },
                                                "id": 189,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 188,
                                                    "name": "chosenProjectId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 143,
                                                    "src": "2794:15:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "2781:29:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref"
                                                }
                                            },
                                            "id": 190,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "totalDonation",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 19,
                                            "src": "2781:43:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "+=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 191,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "2828:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 192,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "value",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2828:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2781:56:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 194,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2781:56:0"
                                },
                                {
                                    "assignments": [
                                        196
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 196,
                                            "name": "madeDonation",
                                            "nodeType": "VariableDeclaration",
                                            "overrides": null,
                                            "scope": 224,
                                            "src": "2884:28:0",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Donation_$33_memory_ptr",
                                                "typeString": "struct Dochaintion.Donation"
                                            },
                                            "typeName": {
                                                "contractScope": null,
                                                "id": 195,
                                                "name": "Donation",
                                                "nodeType": "UserDefinedTypeName",
                                                "referencedDeclaration": 33,
                                                "src": "2884:8:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Donation_$33_storage_ptr",
                                                    "typeString": "struct Dochaintion.Donation"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 213,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 198,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2955:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 199,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "2955:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 200,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2984:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 201,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "value",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "2984:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 202,
                                                        "name": "idToProject",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 48,
                                                        "src": "3012:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                                                            "typeString": "mapping(uint256 => struct Dochaintion.Project storage ref)"
                                                        }
                                                    },
                                                    "id": 204,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 203,
                                                        "name": "chosenProjectId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 143,
                                                        "src": "3024:15:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "3012:28:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Project_$22_storage",
                                                        "typeString": "struct Dochaintion.Project storage ref"
                                                    }
                                                },
                                                "id": 205,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "projectAddress",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 9,
                                                "src": "3012:43:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 206,
                                                        "name": "idToProject",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 48,
                                                        "src": "3074:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                                                            "typeString": "mapping(uint256 => struct Dochaintion.Project storage ref)"
                                                        }
                                                    },
                                                    "id": 208,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 207,
                                                        "name": "chosenProjectId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 143,
                                                        "src": "3086:15:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "3074:28:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Project_$22_storage",
                                                        "typeString": "struct Dochaintion.Project storage ref"
                                                    }
                                                },
                                                "id": 209,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "projectName",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 11,
                                                "src": "3074:40:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage",
                                                    "typeString": "string storage ref"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 210,
                                                    "name": "block",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -4,
                                                    "src": "3133:5:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_block",
                                                        "typeString": "block"
                                                    }
                                                },
                                                "id": 211,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "timestamp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "3133:15:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_storage",
                                                    "typeString": "string storage ref"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 197,
                                            "name": "Donation",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 33,
                                            "src": "2928:8:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_struct$_Donation_$33_storage_ptr_$",
                                                "typeString": "type(struct Dochaintion.Donation storage pointer)"
                                            }
                                        },
                                        "id": 212,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "structConstructorCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2928:235:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Donation_$33_memory",
                                            "typeString": "struct Dochaintion.Donation memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2884:279:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 217,
                                                "name": "madeDonation",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 196,
                                                "src": "3193:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Donation_$33_memory_ptr",
                                                    "typeString": "struct Dochaintion.Donation memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Donation_$33_memory_ptr",
                                                    "typeString": "struct Dochaintion.Donation memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 214,
                                                "name": "donationsList",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 39,
                                                "src": "3174:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_Donation_$33_storage_$dyn_storage",
                                                    "typeString": "struct Dochaintion.Donation storage ref[] storage ref"
                                                }
                                            },
                                            "id": 216,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "3174:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Donation_$33_storage_$returns$__$",
                                                "typeString": "function (struct Dochaintion.Donation storage ref)"
                                            }
                                        },
                                        "id": 218,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3174:32:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 219,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3174:32:0"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 221,
                                                "name": "madeDonation",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 196,
                                                "src": "3257:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Donation_$33_memory_ptr",
                                                    "typeString": "struct Dochaintion.Donation memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Donation_$33_memory_ptr",
                                                    "typeString": "struct Dochaintion.Donation memory"
                                                }
                                            ],
                                            "id": 220,
                                            "name": "donationMade",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 58,
                                            "src": "3244:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_struct$_Donation_$33_memory_ptr_$returns$__$",
                                                "typeString": "function (struct Dochaintion.Donation memory)"
                                            }
                                        },
                                        "id": 222,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3244:26:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 223,
                                    "nodeType": "EmitStatement",
                                    "src": "3239:31:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "functionSelector": "6c563abe",
                        "id": 225,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "fundProject",
                        "nodeType": "FunctionDefinition",
                        "overrides": null,
                        "parameters": {
                            "id": 144,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 143,
                                    "name": "chosenProjectId",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 225,
                                    "src": "2230:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 142,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2230:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2229:25:0"
                        },
                        "returnParameters": {
                            "id": 145,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2270:0:0"
                        },
                        "scope": 402,
                        "src": "2209:1069:0",
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 233,
                            "nodeType": "Block",
                            "src": "3351:38:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 231,
                                        "name": "projectsList",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 36,
                                        "src": "3369:12:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                            "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 230,
                                    "id": 232,
                                    "nodeType": "Return",
                                    "src": "3362:19:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "functionSelector": "80d03829",
                        "id": 234,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getAllProjects",
                        "nodeType": "FunctionDefinition",
                        "overrides": null,
                        "parameters": {
                            "id": 226,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3309:2:0"
                        },
                        "returnParameters": {
                            "id": 230,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 229,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 234,
                                    "src": "3333:16:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Project_$22_memory_$dyn_memory_ptr",
                                        "typeString": "struct Dochaintion.Project[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "contractScope": null,
                                            "id": 227,
                                            "name": "Project",
                                            "nodeType": "UserDefinedTypeName",
                                            "referencedDeclaration": 22,
                                            "src": "3333:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Project_$22_storage_ptr",
                                                "typeString": "struct Dochaintion.Project"
                                            }
                                        },
                                        "id": 228,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "3333:9:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage_ptr",
                                            "typeString": "struct Dochaintion.Project[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3332:18:0"
                        },
                        "scope": 402,
                        "src": "3286:103:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 253,
                            "nodeType": "Block",
                            "src": "3470:126:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 242,
                                                        "name": "projectsList",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 36,
                                                        "src": "3489:12:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                            "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                        }
                                                    },
                                                    "id": 244,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 243,
                                                        "name": "number",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 236,
                                                        "src": "3502:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "3489:20:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Project_$22_storage",
                                                        "typeString": "struct Dochaintion.Project storage ref"
                                                    }
                                                },
                                                "id": 245,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "isActive",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21,
                                                "src": "3489:29:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "20546869732070726f6a65637420697320696e616374697665",
                                                "id": 246,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3520:27:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_6b1d1a63284be567379b3762091bababc0dace80fa4e6557f3511b65653216a0",
                                                    "typeString": "literal_string \" This project is inactive\""
                                                },
                                                "value": " This project is inactive"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_6b1d1a63284be567379b3762091bababc0dace80fa4e6557f3511b65653216a0",
                                                    "typeString": "literal_string \" This project is inactive\""
                                                }
                                            ],
                                            "id": 241,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3481:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 247,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3481:67:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 248,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3481:67:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 249,
                                            "name": "projectsList",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 36,
                                            "src": "3568:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                            }
                                        },
                                        "id": 251,
                                        "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 250,
                                            "name": "number",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 236,
                                            "src": "3581:6:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "3568:20:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Project_$22_storage",
                                            "typeString": "struct Dochaintion.Project storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 240,
                                    "id": 252,
                                    "nodeType": "Return",
                                    "src": "3561:27:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "functionSelector": "f0f3f2c8",
                        "id": 254,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getProject",
                        "nodeType": "FunctionDefinition",
                        "overrides": null,
                        "parameters": {
                            "id": 237,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 236,
                                    "name": "number",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 254,
                                    "src": "3417:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 235,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3417:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3416:16:0"
                        },
                        "returnParameters": {
                            "id": 240,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 239,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 254,
                                    "src": "3454:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Project_$22_memory_ptr",
                                        "typeString": "struct Dochaintion.Project"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 238,
                                        "name": "Project",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 22,
                                        "src": "3454:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Project_$22_storage_ptr",
                                            "typeString": "struct Dochaintion.Project"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3453:16:0"
                        },
                        "scope": 402,
                        "src": "3397:199:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 262,
                            "nodeType": "Block",
                            "src": "3671:39:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 260,
                                        "name": "donationsList",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 39,
                                        "src": "3689:13:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Donation_$33_storage_$dyn_storage",
                                            "typeString": "struct Dochaintion.Donation storage ref[] storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 259,
                                    "id": 261,
                                    "nodeType": "Return",
                                    "src": "3682:20:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "functionSelector": "38a59a07",
                        "id": 263,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getAllDonations",
                        "nodeType": "FunctionDefinition",
                        "overrides": null,
                        "parameters": {
                            "id": 255,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3628:2:0"
                        },
                        "returnParameters": {
                            "id": 259,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 258,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 263,
                                    "src": "3652:17:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Donation_$33_memory_$dyn_memory_ptr",
                                        "typeString": "struct Dochaintion.Donation[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "contractScope": null,
                                            "id": 256,
                                            "name": "Donation",
                                            "nodeType": "UserDefinedTypeName",
                                            "referencedDeclaration": 33,
                                            "src": "3652:8:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Donation_$33_storage_ptr",
                                                "typeString": "struct Dochaintion.Donation"
                                            }
                                        },
                                        "id": 257,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "3652:10:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Donation_$33_storage_$dyn_storage_ptr",
                                            "typeString": "struct Dochaintion.Donation[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3651:19:0"
                        },
                        "scope": 402,
                        "src": "3604:106:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 331,
                            "nodeType": "Block",
                            "src": "3766:453:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 270,
                                                        "name": "OWNER_ROLE",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 63,
                                                        "src": "3793:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 271,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "3805:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 272,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "3805:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    ],
                                                    "id": 269,
                                                    "name": "hasRole",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 525,
                                                    "src": "3785:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                                                        "typeString": "function (bytes32,address) view returns (bool)"
                                                    }
                                                },
                                                "id": 273,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3785:31:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "43616c6c6572206973206e6f7420746865206f776e6572",
                                                "id": 274,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3818:25:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                                                    "typeString": "literal_string \"Caller is not the owner\""
                                                },
                                                "value": "Caller is not the owner"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                                                    "typeString": "literal_string \"Caller is not the owner\""
                                                }
                                            ],
                                            "id": 268,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3777:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 275,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3777:67:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 276,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3777:67:0"
                                },
                                {
                                    "assignments": [
                                        278
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 278,
                                            "name": "caller",
                                            "nodeType": "VariableDeclaration",
                                            "overrides": null,
                                            "scope": 331,
                                            "src": "3855:14:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "typeName": {
                                                "id": 277,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3855:7:0",
                                                "stateMutability": "nonpayable",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 281,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 279,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -15,
                                            "src": "3872:3:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                            }
                                        },
                                        "id": 280,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "3872:10:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3855:27:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 287,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 282,
                                                    "name": "projectsList",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 36,
                                                    "src": "3893:12:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                        "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                    }
                                                },
                                                "id": 284,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 283,
                                                    "name": "number",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 265,
                                                    "src": "3906:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "3893:20:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref"
                                                }
                                            },
                                            "id": 285,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "isActive",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 21,
                                            "src": "3893:29:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "66616c7365",
                                            "id": 286,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3925:5:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "false"
                                        },
                                        "src": "3893:37:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 288,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3893:37:0"
                                },
                                {
                                    "body": {
                                        "id": 322,
                                        "nodeType": "Block",
                                        "src": "4007:158:0",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 310,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "baseExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 303,
                                                                    "name": "founderToProject",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 44,
                                                                    "src": "4026:16:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                                                                        "typeString": "mapping(address => struct Dochaintion.Project storage ref[] storage ref)"
                                                                    }
                                                                },
                                                                "id": 305,
                                                                "indexExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 304,
                                                                    "name": "caller",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 278,
                                                                    "src": "4043:6:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "IndexAccess",
                                                                "src": "4026:24:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                                    "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                                }
                                                            },
                                                            "id": 307,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 306,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 290,
                                                                "src": "4051:1:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "4026:27:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Project_$22_storage",
                                                                "typeString": "struct Dochaintion.Project storage ref"
                                                            }
                                                        },
                                                        "id": 308,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "projectId",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7,
                                                        "src": "4026:37:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 309,
                                                        "name": "number",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 265,
                                                        "src": "4067:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4026:47:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": null,
                                                "id": 321,
                                                "nodeType": "IfStatement",
                                                "src": "4022:132:0",
                                                "trueBody": {
                                                    "id": 320,
                                                    "nodeType": "Block",
                                                    "src": "4075:79:0",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 318,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "argumentTypes": null,
                                                                    "expression": {
                                                                        "argumentTypes": null,
                                                                        "baseExpression": {
                                                                            "argumentTypes": null,
                                                                            "baseExpression": {
                                                                                "argumentTypes": null,
                                                                                "id": 311,
                                                                                "name": "founderToProject",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 44,
                                                                                "src": "4094:16:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                                                                                    "typeString": "mapping(address => struct Dochaintion.Project storage ref[] storage ref)"
                                                                                }
                                                                            },
                                                                            "id": 314,
                                                                            "indexExpression": {
                                                                                "argumentTypes": null,
                                                                                "id": 312,
                                                                                "name": "caller",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 278,
                                                                                "src": "4111:6:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_address",
                                                                                    "typeString": "address"
                                                                                }
                                                                            },
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "IndexAccess",
                                                                            "src": "4094:24:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                                                "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                                            }
                                                                        },
                                                                        "id": 315,
                                                                        "indexExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 313,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 290,
                                                                            "src": "4119:1:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "isConstant": false,
                                                                        "isLValue": true,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "IndexAccess",
                                                                        "src": "4094:27:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_struct$_Project_$22_storage",
                                                                            "typeString": "struct Dochaintion.Project storage ref"
                                                                        }
                                                                    },
                                                                    "id": 316,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "memberName": "isActive",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 21,
                                                                    "src": "4094:36:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bool",
                                                                        "typeString": "bool"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "argumentTypes": null,
                                                                    "hexValue": "66616c7365",
                                                                    "id": 317,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "bool",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "4133:5:0",
                                                                    "subdenomination": null,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bool",
                                                                        "typeString": "bool"
                                                                    },
                                                                    "value": "false"
                                                                },
                                                                "src": "4094:44:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            "id": 319,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "4094:44:0"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 299,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 293,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 290,
                                            "src": "3961:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 294,
                                                    "name": "founderToProject",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 44,
                                                    "src": "3965:16:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                                                        "typeString": "mapping(address => struct Dochaintion.Project storage ref[] storage ref)"
                                                    }
                                                },
                                                "id": 297,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 295,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "3982:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 296,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "3982:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "3965:28:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                }
                                            },
                                            "id": 298,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "3965:35:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3961:39:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 323,
                                    "initializationExpression": {
                                        "assignments": [
                                            290
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 290,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "overrides": null,
                                                "scope": 323,
                                                "src": "3946:9:0",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 289,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "3946:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 292,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 291,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3958:1:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "3946:13:0"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 301,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "4002:3:0",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 300,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 290,
                                                "src": "4002:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 302,
                                        "nodeType": "ExpressionStatement",
                                        "src": "4002:3:0"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "3941:224:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 329,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 324,
                                                    "name": "idToProject",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 48,
                                                    "src": "4175:11:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                                                        "typeString": "mapping(uint256 => struct Dochaintion.Project storage ref)"
                                                    }
                                                },
                                                "id": 326,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 325,
                                                    "name": "number",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 265,
                                                    "src": "4187:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "4175:19:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref"
                                                }
                                            },
                                            "id": 327,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "isActive",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 21,
                                            "src": "4175:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "66616c7365",
                                            "id": 328,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4206:5:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "false"
                                        },
                                        "src": "4175:36:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 330,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4175:36:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "functionSelector": "ca42b72c",
                        "id": 332,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deactiveProject",
                        "nodeType": "FunctionDefinition",
                        "overrides": null,
                        "parameters": {
                            "id": 266,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 265,
                                    "name": "number",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 332,
                                    "src": "3743:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 264,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3743:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3742:16:0"
                        },
                        "returnParameters": {
                            "id": 267,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3766:0:0"
                        },
                        "scope": 402,
                        "src": "3718:501:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 400,
                            "nodeType": "Block",
                            "src": "4275:450:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 339,
                                                        "name": "OWNER_ROLE",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 63,
                                                        "src": "4302:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 340,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "4314:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 341,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "4314:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    ],
                                                    "id": 338,
                                                    "name": "hasRole",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 525,
                                                    "src": "4294:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                                                        "typeString": "function (bytes32,address) view returns (bool)"
                                                    }
                                                },
                                                "id": 342,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4294:31:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "43616c6c6572206973206e6f7420746865206f776e6572",
                                                "id": 343,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4327:25:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                                                    "typeString": "literal_string \"Caller is not the owner\""
                                                },
                                                "value": "Caller is not the owner"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                                                    "typeString": "literal_string \"Caller is not the owner\""
                                                }
                                            ],
                                            "id": 337,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4286:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 344,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4286:67:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 345,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4286:67:0"
                                },
                                {
                                    "assignments": [
                                        347
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 347,
                                            "name": "caller",
                                            "nodeType": "VariableDeclaration",
                                            "overrides": null,
                                            "scope": 400,
                                            "src": "4364:14:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "typeName": {
                                                "id": 346,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4364:7:0",
                                                "stateMutability": "nonpayable",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 350,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 348,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -15,
                                            "src": "4381:3:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                            }
                                        },
                                        "id": 349,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "4381:10:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4364:27:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 356,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 351,
                                                    "name": "projectsList",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 36,
                                                    "src": "4402:12:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                        "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                    }
                                                },
                                                "id": 353,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 352,
                                                    "name": "number",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 334,
                                                    "src": "4415:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "4402:20:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref"
                                                }
                                            },
                                            "id": 354,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "isActive",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 21,
                                            "src": "4402:29:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "74727565",
                                            "id": 355,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4434:4:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "4402:36:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 357,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4402:36:0"
                                },
                                {
                                    "body": {
                                        "id": 391,
                                        "nodeType": "Block",
                                        "src": "4515:157:0",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 379,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "baseExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 372,
                                                                    "name": "founderToProject",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 44,
                                                                    "src": "4534:16:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                                                                        "typeString": "mapping(address => struct Dochaintion.Project storage ref[] storage ref)"
                                                                    }
                                                                },
                                                                "id": 374,
                                                                "indexExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 373,
                                                                    "name": "caller",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 347,
                                                                    "src": "4551:6:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "IndexAccess",
                                                                "src": "4534:24:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                                    "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                                }
                                                            },
                                                            "id": 376,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 375,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 359,
                                                                "src": "4559:1:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "4534:27:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Project_$22_storage",
                                                                "typeString": "struct Dochaintion.Project storage ref"
                                                            }
                                                        },
                                                        "id": 377,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "projectId",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7,
                                                        "src": "4534:37:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 378,
                                                        "name": "number",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 334,
                                                        "src": "4575:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4534:47:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": null,
                                                "id": 390,
                                                "nodeType": "IfStatement",
                                                "src": "4530:131:0",
                                                "trueBody": {
                                                    "id": 389,
                                                    "nodeType": "Block",
                                                    "src": "4583:78:0",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 387,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "argumentTypes": null,
                                                                    "expression": {
                                                                        "argumentTypes": null,
                                                                        "baseExpression": {
                                                                            "argumentTypes": null,
                                                                            "baseExpression": {
                                                                                "argumentTypes": null,
                                                                                "id": 380,
                                                                                "name": "founderToProject",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 44,
                                                                                "src": "4602:16:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                                                                                    "typeString": "mapping(address => struct Dochaintion.Project storage ref[] storage ref)"
                                                                                }
                                                                            },
                                                                            "id": 383,
                                                                            "indexExpression": {
                                                                                "argumentTypes": null,
                                                                                "id": 381,
                                                                                "name": "caller",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 347,
                                                                                "src": "4619:6:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_address",
                                                                                    "typeString": "address"
                                                                                }
                                                                            },
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "IndexAccess",
                                                                            "src": "4602:24:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                                                "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                                            }
                                                                        },
                                                                        "id": 384,
                                                                        "indexExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 382,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 359,
                                                                            "src": "4627:1:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "isConstant": false,
                                                                        "isLValue": true,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "IndexAccess",
                                                                        "src": "4602:27:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_struct$_Project_$22_storage",
                                                                            "typeString": "struct Dochaintion.Project storage ref"
                                                                        }
                                                                    },
                                                                    "id": 385,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "memberName": "isActive",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 21,
                                                                    "src": "4602:36:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bool",
                                                                        "typeString": "bool"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "argumentTypes": null,
                                                                    "hexValue": "74727565",
                                                                    "id": 386,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "bool",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "4641:4:0",
                                                                    "subdenomination": null,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bool",
                                                                        "typeString": "bool"
                                                                    },
                                                                    "value": "true"
                                                                },
                                                                "src": "4602:43:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            "id": 388,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "4602:43:0"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 368,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 362,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 359,
                                            "src": "4469:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 363,
                                                    "name": "founderToProject",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 44,
                                                    "src": "4473:16:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Project_$22_storage_$dyn_storage_$",
                                                        "typeString": "mapping(address => struct Dochaintion.Project storage ref[] storage ref)"
                                                    }
                                                },
                                                "id": 366,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 364,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "4490:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 365,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "4490:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "4473:28:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_Project_$22_storage_$dyn_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref[] storage ref"
                                                }
                                            },
                                            "id": 367,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "4473:35:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4469:39:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 392,
                                    "initializationExpression": {
                                        "assignments": [
                                            359
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 359,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "overrides": null,
                                                "scope": 392,
                                                "src": "4454:9:0",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 358,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "4454:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 361,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 360,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4466:1:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "4454:13:0"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 370,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "4510:3:0",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 369,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 359,
                                                "src": "4510:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 371,
                                        "nodeType": "ExpressionStatement",
                                        "src": "4510:3:0"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "4449:223:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 398,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 393,
                                                    "name": "idToProject",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 48,
                                                    "src": "4682:11:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Project_$22_storage_$",
                                                        "typeString": "mapping(uint256 => struct Dochaintion.Project storage ref)"
                                                    }
                                                },
                                                "id": 395,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 394,
                                                    "name": "number",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 334,
                                                    "src": "4694:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "4682:19:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Project_$22_storage",
                                                    "typeString": "struct Dochaintion.Project storage ref"
                                                }
                                            },
                                            "id": 396,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "isActive",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 21,
                                            "src": "4682:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "74727565",
                                            "id": 397,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4713:4:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "4682:35:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 399,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4682:35:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "functionSelector": "41544a82",
                        "id": 401,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "activateProject",
                        "nodeType": "FunctionDefinition",
                        "overrides": null,
                        "parameters": {
                            "id": 335,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 334,
                                    "name": "number",
                                    "nodeType": "VariableDeclaration",
                                    "overrides": null,
                                    "scope": 401,
                                    "src": "4252:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 333,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4252:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4251:16:0"
                        },
                        "returnParameters": {
                            "id": 336,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4275:0:0"
                        },
                        "scope": 402,
                        "src": "4227:498:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "scope": 403,
                "src": "155:4573:0"
            }
        ],
        "src": "33:4697:0"
    },
    "compiler": {
        "name": "solc",
        "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
    },
    "networks": {
        "4": {
            "events": {
                "0x3a3232c320e73401061dba6673ad1e3ba85929cc4ee3d3fce1ec7ff1549bd074": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "donator",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "amount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "projectAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "string",
                                    "name": "projectName",
                                    "type": "string"
                                }
                            ],
                            "indexed": false,
                            "internalType": "struct Dochaintion.Donation",
                            "name": "donation",
                            "type": "tuple"
                        }
                    ],
                    "name": "donationMade",
                    "type": "event"
                },
                "0x2faddad96580d1b30acf6ee068d66f10af3cb31f48ab87f87cd37f13891a2a3d": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "internalType": "address",
                            "name": "founder",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "projectId",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "projectAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "string",
                                    "name": "projectName",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "description",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "totalDonation",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "isActive",
                                    "type": "bool"
                                }
                            ],
                            "indexed": false,
                            "internalType": "struct Dochaintion.Project",
                            "name": "madeProject",
                            "type": "tuple"
                        }
                    ],
                    "name": "projectMade",
                    "type": "event"
                },
                "0xd270de6e8160fe557e164bcd1fda6cb5dc6543111afc24c62882dfc7d2d05860": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "donator",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "amount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "projectAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "string",
                                    "name": "projectName",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "date",
                                    "type": "uint256"
                                }
                            ],
                            "indexed": false,
                            "internalType": "struct Dochaintion.Donation",
                            "name": "donation",
                            "type": "tuple"
                        }
                    ],
                    "name": "donationMade",
                    "type": "event"
                },
                "0x4fbe2c5389c7c2931bc2f33ba4b897066082ea8714cdd37206f9d19087270bbe": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "internalType": "address",
                            "name": "founder",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "projectId",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "projectAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "string",
                                    "name": "projectName",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "description",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "photoCid",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "totalDonation",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "isActive",
                                    "type": "bool"
                                }
                            ],
                            "indexed": false,
                            "internalType": "struct Dochaintion.Project",
                            "name": "madeProject",
                            "type": "tuple"
                        }
                    ],
                    "name": "projectMade",
                    "type": "event"
                },
                "0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "bytes32",
                            "name": "role",
                            "type": "bytes32"
                        },
                        {
                            "indexed": true,
                            "internalType": "bytes32",
                            "name": "previousAdminRole",
                            "type": "bytes32"
                        },
                        {
                            "indexed": true,
                            "internalType": "bytes32",
                            "name": "newAdminRole",
                            "type": "bytes32"
                        }
                    ],
                    "name": "RoleAdminChanged",
                    "type": "event"
                },
                "0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "bytes32",
                            "name": "role",
                            "type": "bytes32"
                        },
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "sender",
                            "type": "address"
                        }
                    ],
                    "name": "RoleGranted",
                    "type": "event"
                },
                "0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "bytes32",
                            "name": "role",
                            "type": "bytes32"
                        },
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "sender",
                            "type": "address"
                        }
                    ],
                    "name": "RoleRevoked",
                    "type": "event"
                }
            },
            "links": {},
            "address": "0xF58ccDf3eF5Db29f53BaA052D4ec1881C47AF4cC",
            "transactionHash": "0xe4b6f57423dbfac80304f4782ae64762070014549c85f5322f6ad473a89c50e7"
        }
    },
    "schemaVersion": "3.3.2",
    "updatedAt": "2021-01-22T20:38:08.129Z",
    "networkType": "ethereum",
    "devdoc": {
        "methods": {
            "getRoleAdmin(bytes32)": {
                "details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}.     * To change a role's admin, use {_setRoleAdmin}."
            },
            "getRoleMember(bytes32,uint256)": {
                "details": "Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive.     * Role bearers are not sorted in any particular way, and their ordering may change at any point.     * WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information."
            },
            "getRoleMemberCount(bytes32)": {
                "details": "Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role."
            },
            "grantRole(bytes32,address)": {
                "details": "Grants `role` to `account`.     * If `account` had not been already granted `role`, emits a {RoleGranted} event.     * Requirements:     * - the caller must have ``role``'s admin role."
            },
            "hasRole(bytes32,address)": {
                "details": "Returns `true` if `account` has been granted `role`."
            },
            "renounceRole(bytes32,address)": {
                "details": "Revokes `role` from the calling account.     * Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced).     * If the calling account had been granted `role`, emits a {RoleRevoked} event.     * Requirements:     * - the caller must be `account`."
            },
            "revokeRole(bytes32,address)": {
                "details": "Revokes `role` from `account`.     * If `account` had been granted `role`, emits a {RoleRevoked} event.     * Requirements:     * - the caller must have ``role``'s admin role."
            }
        }
    },
    "userdoc": {
        "methods": {}
    }
}