using DonationPlatform.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Nethereum.Web3;

namespace DonationPlatform.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        async public void MyAction()
        {
            //https://docs.nethereum.com/en/latest/Nethereum.Workbooks/docs/nethereum-gettingstarted-smartcontracts-untyped/
            //https://ethereum.stackexchange.com/questions/69040/how-to-call-a-contract-function-using-nethereum
            //Bekijk Output -> Debug van Visual Studio voor resultaat
            var abi = @"[
    {
                'inputs': [],
        'stateMutability': 'payable',
        'type': 'constructor',
        'payable': true
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'internalType': 'address',
                'name': 'player',
                'type': 'address'
        },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'item',
                'type': 'uint256'
        }
        ],
        'name': 'ReceivedItem',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'components': [
                    {
                        'internalType': 'string',
                        'name': 'name',
                        'type': 'string'
            },
                    {
                        'internalType': 'uint256',
                        'name': 'rarity',
                        'type': 'uint256'
            },
                    {
                        'components': [
                            {
                                'internalType': 'string',
                                'name': 'skill_name',
                                'type': 'string'
                },
                            {
                                'internalType': 'string',
                                'name': 'description',
                                'type': 'string'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'min_skill_damage',
                                'type': 'uint256'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'max_skill_damage',
                                'type': 'uint256'
                }
                        ],
                        'internalType': 'struct HeroesMatch.SkillClass',
                        'name': 'skill_1',
                        'type': 'tuple'
            },
                    {
                        'components': [
                            {
                                'internalType': 'string',
                                'name': 'skill_name',
                                'type': 'string'
                },
                            {
                                'internalType': 'string',
                                'name': 'description',
                                'type': 'string'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'min_skill_damage',
                                'type': 'uint256'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'max_skill_damage',
                                'type': 'uint256'
                }
                        ],
                        'internalType': 'struct HeroesMatch.SkillClass',
                        'name': 'skill_2',
                        'type': 'tuple'
            }
                ],
                'indexed': false,
                'internalType': 'struct HeroesMatch.HeroesClass',
                'name': 'challenger',
                'type': 'tuple'
        },
            {
                'components': [
                    {
                        'internalType': 'string',
                        'name': 'name',
                        'type': 'string'
            },
                    {
                        'internalType': 'uint256',
                        'name': 'rarity',
                        'type': 'uint256'
            },
                    {
                        'components': [
                            {
                                'internalType': 'string',
                                'name': 'skill_name',
                                'type': 'string'
                },
                            {
                                'internalType': 'string',
                                'name': 'description',
                                'type': 'string'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'min_skill_damage',
                                'type': 'uint256'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'max_skill_damage',
                                'type': 'uint256'
                }
                        ],
                        'internalType': 'struct HeroesMatch.SkillClass',
                        'name': 'skill_1',
                        'type': 'tuple'
            },
                    {
                        'components': [
                            {
                                'internalType': 'string',
                                'name': 'skill_name',
                                'type': 'string'
                },
                            {
                                'internalType': 'string',
                                'name': 'description',
                                'type': 'string'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'min_skill_damage',
                                'type': 'uint256'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'max_skill_damage',
                                'type': 'uint256'
                }
                        ],
                        'internalType': 'struct HeroesMatch.SkillClass',
                        'name': 'skill_2',
                        'type': 'tuple'
            }
                ],
                'indexed': false,
                'internalType': 'struct HeroesMatch.HeroesClass',
                'name': 'opponent',
                'type': 'tuple'
        },
            {
                'indexed': false,
                'internalType': 'bool',
                'name': 'result',
                'type': 'bool'
        }
        ],
        'name': 'RoundWinner',
        'type': 'event'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
        }
        ],
        'name': 'ownerToMatch',
        'outputs': [
            {
                'components': [
                    {
                        'internalType': 'string',
                        'name': 'name',
                        'type': 'string'
            },
                    {
                        'internalType': 'uint256',
                        'name': 'rarity',
                        'type': 'uint256'
            },
                    {
                        'components': [
                            {
                                'internalType': 'string',
                                'name': 'skill_name',
                                'type': 'string'
                },
                            {
                                'internalType': 'string',
                                'name': 'description',
                                'type': 'string'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'min_skill_damage',
                                'type': 'uint256'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'max_skill_damage',
                                'type': 'uint256'
                }
                        ],
                        'internalType': 'struct HeroesMatch.SkillClass',
                        'name': 'skill_1',
                        'type': 'tuple'
            },
                    {
                        'components': [
                            {
                                'internalType': 'string',
                                'name': 'skill_name',
                                'type': 'string'
                },
                            {
                                'internalType': 'string',
                                'name': 'description',
                                'type': 'string'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'min_skill_damage',
                                'type': 'uint256'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'max_skill_damage',
                                'type': 'uint256'
                }
                        ],
                        'internalType': 'struct HeroesMatch.SkillClass',
                        'name': 'skill_2',
                        'type': 'tuple'
            }
                ],
                'internalType': 'struct HeroesMatch.HeroesClass',
                'name': 'challenger',
                'type': 'tuple'
        },
            {
                'components': [
                    {
                        'internalType': 'string',
                        'name': 'name',
                        'type': 'string'
            },
                    {
                        'internalType': 'uint256',
                        'name': 'rarity',
                        'type': 'uint256'
            },
                    {
                        'components': [
                            {
                                'internalType': 'string',
                                'name': 'skill_name',
                                'type': 'string'
                },
                            {
                                'internalType': 'string',
                                'name': 'description',
                                'type': 'string'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'min_skill_damage',
                                'type': 'uint256'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'max_skill_damage',
                                'type': 'uint256'
                }
                        ],
                        'internalType': 'struct HeroesMatch.SkillClass',
                        'name': 'skill_1',
                        'type': 'tuple'
            },
                    {
                        'components': [
                            {
                                'internalType': 'string',
                                'name': 'skill_name',
                                'type': 'string'
                },
                            {
                                'internalType': 'string',
                                'name': 'description',
                                'type': 'string'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'min_skill_damage',
                                'type': 'uint256'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'max_skill_damage',
                                'type': 'uint256'
                }
                        ],
                        'internalType': 'struct HeroesMatch.SkillClass',
                        'name': 'skill_2',
                        'type': 'tuple'
            }
                ],
                'internalType': 'struct HeroesMatch.HeroesClass',
                'name': 'opponent',
                'type': 'tuple'
        }
        ],
        'stateMutability': 'view',
        'type': 'function',
        'constant': true
    },
    {
        'inputs': [],
        'name': 'priceOfUrl',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
        }
        ],
        'stateMutability': 'view',
        'type': 'function',
        'constant': true
    },
    {
        'inputs': [],
        'name': 'temp',
        'outputs': [
            {
                'internalType': 'string',
                'name': '',
                'type': 'string'
        }
        ],
        'stateMutability': 'view',
        'type': 'function',
        'constant': true
    },
    {
        'inputs': [
            {
                'internalType': 'bytes32',
                'name': '',
                'type': 'bytes32'
        },
            {
                'internalType': 'string',
                'name': 'result',
                'type': 'string'
        }
        ],
        'name': '__callback',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'bytes32',
                'name': '_myid',
                'type': 'bytes32'
        },
            {
                'internalType': 'string',
                'name': '_result',
                'type': 'string'
        },
            {
                'internalType': 'bytes',
                'name': '_proof',
                'type': 'bytes'
        }
        ],
        'name': '__callback',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'getTemp',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function',
        'payable': true
    },
    {
        'inputs': [
            {
                'internalType': 'uint256',
                'name': 'item',
                'type': 'uint256'
        }
        ],
        'name': 'getReward',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'components': [
                    {
                        'internalType': 'string',
                        'name': 'name',
                        'type': 'string'
            },
                    {
                        'internalType': 'uint256',
                        'name': 'rarity',
                        'type': 'uint256'
            },
                    {
                        'components': [
                            {
                                'internalType': 'string',
                                'name': 'skill_name',
                                'type': 'string'
                },
                            {
                                'internalType': 'string',
                                'name': 'description',
                                'type': 'string'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'min_skill_damage',
                                'type': 'uint256'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'max_skill_damage',
                                'type': 'uint256'
                }
                        ],
                        'internalType': 'struct HeroesMatch.SkillClass',
                        'name': 'skill_1',
                        'type': 'tuple'
            },
                    {
                        'components': [
                            {
                                'internalType': 'string',
                                'name': 'skill_name',
                                'type': 'string'
                },
                            {
                                'internalType': 'string',
                                'name': 'description',
                                'type': 'string'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'min_skill_damage',
                                'type': 'uint256'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'max_skill_damage',
                                'type': 'uint256'
                }
                        ],
                        'internalType': 'struct HeroesMatch.SkillClass',
                        'name': 'skill_2',
                        'type': 'tuple'
            }
                ],
                'internalType': 'struct HeroesMatch.HeroesClass',
                'name': '_challenger',
                'type': 'tuple'
        },
            {
                'components': [
                    {
                        'internalType': 'string',
                        'name': 'name',
                        'type': 'string'
            },
                    {
                        'internalType': 'uint256',
                        'name': 'rarity',
                        'type': 'uint256'
            },
                    {
                        'components': [
                            {
                                'internalType': 'string',
                                'name': 'skill_name',
                                'type': 'string'
                },
                            {
                                'internalType': 'string',
                                'name': 'description',
                                'type': 'string'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'min_skill_damage',
                                'type': 'uint256'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'max_skill_damage',
                                'type': 'uint256'
                }
                        ],
                        'internalType': 'struct HeroesMatch.SkillClass',
                        'name': 'skill_1',
                        'type': 'tuple'
            },
                    {
                        'components': [
                            {
                                'internalType': 'string',
                                'name': 'skill_name',
                                'type': 'string'
                },
                            {
                                'internalType': 'string',
                                'name': 'description',
                                'type': 'string'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'min_skill_damage',
                                'type': 'uint256'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'max_skill_damage',
                                'type': 'uint256'
                }
                        ],
                        'internalType': 'struct HeroesMatch.SkillClass',
                        'name': 'skill_2',
                        'type': 'tuple'
            }
                ],
                'internalType': 'struct HeroesMatch.HeroesClass',
                'name': '_opponent',
                'type': 'tuple'
        }
        ],
        'name': 'initFight',
        'outputs': [
            {
                'components': [
                    {
                        'internalType': 'string',
                        'name': 'name',
                        'type': 'string'
            },
                    {
                        'internalType': 'uint256',
                        'name': 'rarity',
                        'type': 'uint256'
            },
                    {
                        'components': [
                            {
                                'internalType': 'string',
                                'name': 'skill_name',
                                'type': 'string'
                },
                            {
                                'internalType': 'string',
                                'name': 'description',
                                'type': 'string'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'min_skill_damage',
                                'type': 'uint256'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'max_skill_damage',
                                'type': 'uint256'
                }
                        ],
                        'internalType': 'struct HeroesMatch.SkillClass',
                        'name': 'skill_1',
                        'type': 'tuple'
            },
                    {
                        'components': [
                            {
                                'internalType': 'string',
                                'name': 'skill_name',
                                'type': 'string'
                },
                            {
                                'internalType': 'string',
                                'name': 'description',
                                'type': 'string'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'min_skill_damage',
                                'type': 'uint256'
                },
                            {
                                'internalType': 'uint256',
                                'name': 'max_skill_damage',
                                'type': 'uint256'
                }
                        ],
                        'internalType': 'struct HeroesMatch.SkillClass',
                        'name': 'skill_2',
                        'type': 'tuple'
            }
                ],
                'internalType': 'struct HeroesMatch.HeroesClass',
                'name': '',
                'type': 'tuple'
        }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'uint256',
                'name': 'randomNumberChallenger',
                'type': 'uint256'
        },
            {
                'internalType': 'uint256',
                'name': 'randomNumberOpponent',
                'type': 'uint256'
        }
        ],
        'name': 'beginFight',
        'outputs': [
            {
                'internalType': 'bool',
                'name': '',
                'type': 'bool'
        },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
        }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'uint256',
                'name': 'randomNumberChallenger',
                'type': 'uint256'
        },
            {
                'internalType': 'uint256',
                'name': 'randomNumberOpponent',
                'type': 'uint256'
        }
        ],
        'name': 'didChallengerWin',
        'outputs': [
            {
                'internalType': 'bool',
                'name': '',
                'type': 'bool'
        }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    }
]";

            var web3 = new Web3("https://rinkeby.infura.io/v3/84e023c064b1458eaedc358be5c8677a");
            var contract = web3.Eth.GetContract(abi, "0x493306b98DC280d4C7551b3a94602da3d998b70A");
            var function = contract.GetFunction("temp");
            var balanceFirstAmountSend = await function.CallAsync<string>();

            //
            System.Diagnostics.Debug.WriteLine("temperature " + balanceFirstAmountSend);
        }

    }
}
