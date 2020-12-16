// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function MyAction() {
    console.log("JS CALL");
}

const abi = [
    {
        "inputs": [],
        "stateMutability": "payable",
        "type": "constructor",
        "payable": true
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
        },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "item",
                "type": "uint256"
        }
        ],
        "name": "ReceivedItem",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
            },
                    {
                        "internalType": "uint256",
                        "name": "rarity",
                        "type": "uint256"
            },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "skill_name",
                                "type": "string"
                },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                },
                            {
                                "internalType": "uint256",
                                "name": "min_skill_damage",
                                "type": "uint256"
                },
                            {
                                "internalType": "uint256",
                                "name": "max_skill_damage",
                                "type": "uint256"
                }
                        ],
                        "internalType": "struct HeroesMatch.SkillClass",
                        "name": "skill_1",
                        "type": "tuple"
            },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "skill_name",
                                "type": "string"
                },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                },
                            {
                                "internalType": "uint256",
                                "name": "min_skill_damage",
                                "type": "uint256"
                },
                            {
                                "internalType": "uint256",
                                "name": "max_skill_damage",
                                "type": "uint256"
                }
                        ],
                        "internalType": "struct HeroesMatch.SkillClass",
                        "name": "skill_2",
                        "type": "tuple"
            }
                ],
                "indexed": false,
                "internalType": "struct HeroesMatch.HeroesClass",
                "name": "challenger",
                "type": "tuple"
        },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
            },
                    {
                        "internalType": "uint256",
                        "name": "rarity",
                        "type": "uint256"
            },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "skill_name",
                                "type": "string"
                },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                },
                            {
                                "internalType": "uint256",
                                "name": "min_skill_damage",
                                "type": "uint256"
                },
                            {
                                "internalType": "uint256",
                                "name": "max_skill_damage",
                                "type": "uint256"
                }
                        ],
                        "internalType": "struct HeroesMatch.SkillClass",
                        "name": "skill_1",
                        "type": "tuple"
            },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "skill_name",
                                "type": "string"
                },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                },
                            {
                                "internalType": "uint256",
                                "name": "min_skill_damage",
                                "type": "uint256"
                },
                            {
                                "internalType": "uint256",
                                "name": "max_skill_damage",
                                "type": "uint256"
                }
                        ],
                        "internalType": "struct HeroesMatch.SkillClass",
                        "name": "skill_2",
                        "type": "tuple"
            }
                ],
                "indexed": false,
                "internalType": "struct HeroesMatch.HeroesClass",
                "name": "opponent",
                "type": "tuple"
        },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "result",
                "type": "bool"
        }
        ],
        "name": "RoundWinner",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
        }
        ],
        "name": "ownerToMatch",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
            },
                    {
                        "internalType": "uint256",
                        "name": "rarity",
                        "type": "uint256"
            },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "skill_name",
                                "type": "string"
                },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                },
                            {
                                "internalType": "uint256",
                                "name": "min_skill_damage",
                                "type": "uint256"
                },
                            {
                                "internalType": "uint256",
                                "name": "max_skill_damage",
                                "type": "uint256"
                }
                        ],
                        "internalType": "struct HeroesMatch.SkillClass",
                        "name": "skill_1",
                        "type": "tuple"
            },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "skill_name",
                                "type": "string"
                },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                },
                            {
                                "internalType": "uint256",
                                "name": "min_skill_damage",
                                "type": "uint256"
                },
                            {
                                "internalType": "uint256",
                                "name": "max_skill_damage",
                                "type": "uint256"
                }
                        ],
                        "internalType": "struct HeroesMatch.SkillClass",
                        "name": "skill_2",
                        "type": "tuple"
            }
                ],
                "internalType": "struct HeroesMatch.HeroesClass",
                "name": "challenger",
                "type": "tuple"
        },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
            },
                    {
                        "internalType": "uint256",
                        "name": "rarity",
                        "type": "uint256"
            },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "skill_name",
                                "type": "string"
                },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                },
                            {
                                "internalType": "uint256",
                                "name": "min_skill_damage",
                                "type": "uint256"
                },
                            {
                                "internalType": "uint256",
                                "name": "max_skill_damage",
                                "type": "uint256"
                }
                        ],
                        "internalType": "struct HeroesMatch.SkillClass",
                        "name": "skill_1",
                        "type": "tuple"
            },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "skill_name",
                                "type": "string"
                },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                },
                            {
                                "internalType": "uint256",
                                "name": "min_skill_damage",
                                "type": "uint256"
                },
                            {
                                "internalType": "uint256",
                                "name": "max_skill_damage",
                                "type": "uint256"
                }
                        ],
                        "internalType": "struct HeroesMatch.SkillClass",
                        "name": "skill_2",
                        "type": "tuple"
            }
                ],
                "internalType": "struct HeroesMatch.HeroesClass",
                "name": "opponent",
                "type": "tuple"
        }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "priceOfUrl",
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
        "inputs": [],
        "name": "temp",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
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
                "name": "",
                "type": "bytes32"
        },
            {
                "internalType": "string",
                "name": "result",
                "type": "string"
        }
        ],
        "name": "__callback",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_myid",
                "type": "bytes32"
        },
            {
                "internalType": "string",
                "name": "_result",
                "type": "string"
        },
            {
                "internalType": "bytes",
                "name": "_proof",
                "type": "bytes"
        }
        ],
        "name": "__callback",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTemp",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "item",
                "type": "uint256"
        }
        ],
        "name": "getReward",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
            },
                    {
                        "internalType": "uint256",
                        "name": "rarity",
                        "type": "uint256"
            },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "skill_name",
                                "type": "string"
                },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                },
                            {
                                "internalType": "uint256",
                                "name": "min_skill_damage",
                                "type": "uint256"
                },
                            {
                                "internalType": "uint256",
                                "name": "max_skill_damage",
                                "type": "uint256"
                }
                        ],
                        "internalType": "struct HeroesMatch.SkillClass",
                        "name": "skill_1",
                        "type": "tuple"
            },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "skill_name",
                                "type": "string"
                },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                },
                            {
                                "internalType": "uint256",
                                "name": "min_skill_damage",
                                "type": "uint256"
                },
                            {
                                "internalType": "uint256",
                                "name": "max_skill_damage",
                                "type": "uint256"
                }
                        ],
                        "internalType": "struct HeroesMatch.SkillClass",
                        "name": "skill_2",
                        "type": "tuple"
            }
                ],
                "internalType": "struct HeroesMatch.HeroesClass",
                "name": "_challenger",
                "type": "tuple"
        },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
            },
                    {
                        "internalType": "uint256",
                        "name": "rarity",
                        "type": "uint256"
            },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "skill_name",
                                "type": "string"
                },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                },
                            {
                                "internalType": "uint256",
                                "name": "min_skill_damage",
                                "type": "uint256"
                },
                            {
                                "internalType": "uint256",
                                "name": "max_skill_damage",
                                "type": "uint256"
                }
                        ],
                        "internalType": "struct HeroesMatch.SkillClass",
                        "name": "skill_1",
                        "type": "tuple"
            },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "skill_name",
                                "type": "string"
                },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                },
                            {
                                "internalType": "uint256",
                                "name": "min_skill_damage",
                                "type": "uint256"
                },
                            {
                                "internalType": "uint256",
                                "name": "max_skill_damage",
                                "type": "uint256"
                }
                        ],
                        "internalType": "struct HeroesMatch.SkillClass",
                        "name": "skill_2",
                        "type": "tuple"
            }
                ],
                "internalType": "struct HeroesMatch.HeroesClass",
                "name": "_opponent",
                "type": "tuple"
        }
        ],
        "name": "initFight",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
            },
                    {
                        "internalType": "uint256",
                        "name": "rarity",
                        "type": "uint256"
            },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "skill_name",
                                "type": "string"
                },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                },
                            {
                                "internalType": "uint256",
                                "name": "min_skill_damage",
                                "type": "uint256"
                },
                            {
                                "internalType": "uint256",
                                "name": "max_skill_damage",
                                "type": "uint256"
                }
                        ],
                        "internalType": "struct HeroesMatch.SkillClass",
                        "name": "skill_1",
                        "type": "tuple"
            },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "skill_name",
                                "type": "string"
                },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                },
                            {
                                "internalType": "uint256",
                                "name": "min_skill_damage",
                                "type": "uint256"
                },
                            {
                                "internalType": "uint256",
                                "name": "max_skill_damage",
                                "type": "uint256"
                }
                        ],
                        "internalType": "struct HeroesMatch.SkillClass",
                        "name": "skill_2",
                        "type": "tuple"
            }
                ],
                "internalType": "struct HeroesMatch.HeroesClass",
                "name": "",
                "type": "tuple"
        }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "randomNumberChallenger",
                "type": "uint256"
        },
            {
                "internalType": "uint256",
                "name": "randomNumberOpponent",
                "type": "uint256"
        }
        ],
        "name": "beginFight",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
        },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
        }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "randomNumberChallenger",
                "type": "uint256"
        },
            {
                "internalType": "uint256",
                "name": "randomNumberOpponent",
                "type": "uint256"
        }
        ],
        "name": "didChallengerWin",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
        }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

async function ethEnabled() {
    console.log('eth');
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
            abi,
            "0x493306b98DC280d4C7551b3a94602da3d998b70A"
        );
        return MyIdoContract;
    }
    catch (error) {
        console.log("error " + error);
    }
}

async function getMapTemp() {
    let contract = await getContract();
    var accounts = await web3.eth.getAccounts();

    let getResult = await contract.methods.temp().call()
        .then(result => { return result })
        .catch(err => console.log(err));
    console.log(getResult);

}