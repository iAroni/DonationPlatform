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
                'anonymous': false,
            'inputs': [
                {
                    'components': [
                        {
                            'internalType': 'address',
                            'name': 'donator',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'projectAddress',
                            'type': 'address'
                        }
                    ],
                    'indexed': false,
                    'internalType': 'struct Dochaintion.Donation',
                    'name': 'donation',
                    'type': 'tuple'
                }
            ],
            'name': 'donationMade',
            'type': 'event'
        },
        {
            'anonymous': false,
            'inputs': [
                {
                    'indexed': false,
                    'internalType': 'address',
                    'name': 'founder',
                    'type': 'address'
                },
                {
                    'components': [
                        {
                            'internalType': 'uint256',
                            'name': 'projectId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'projectAddress',
                            'type': 'address'
                        },
                        {
                            'internalType': 'string',
                            'name': 'name',
                            'type': 'string'
                        },
                        {
                            'internalType': 'string',
                            'name': 'description',
                            'type': 'string'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'totalDonation',
                            'type': 'uint256'
                        }
                    ],
                    'indexed': false,
                    'internalType': 'struct Dochaintion.Project',
                    'name': 'madeProject',
                    'type': 'tuple'
                }
            ],
            'name': 'projectMade',
            'type': 'event'
        },
        {
            'inputs': [
                {
                    'internalType': 'address',
                    'name': '_projectAddress',
                    'type': 'address'
                },
                {
                    'internalType': 'string',
                    'name': '_name',
                    'type': 'string'
                },
                {
                    'internalType': 'string',
                    'name': '_description',
                    'type': 'string'
                }
            ],
            'name': 'makeProject',
            'outputs': [],
            'stateMutability': 'nonpayable',
            'type': 'function'
        },
        {
            'inputs': [
                {
                    'internalType': 'uint256',
                    'name': 'chosenProjectId',
                    'type': 'uint256'
                }
            ],
            'name': 'fundProject',
            'outputs': [],
            'stateMutability': 'payable',
            'type': 'function',
            'payable': true
        },
        {
            'inputs': [],
            'name': 'getAllProjects',
            'outputs': [
                {
                    'components': [
                        {
                            'internalType': 'uint256',
                            'name': 'projectId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'projectAddress',
                            'type': 'address'
                        },
                        {
                            'internalType': 'string',
                            'name': 'name',
                            'type': 'string'
                        },
                        {
                            'internalType': 'string',
                            'name': 'description',
                            'type': 'string'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'totalDonation',
                            'type': 'uint256'
                        }
                    ],
                    'internalType': 'struct Dochaintion.Project[]',
                    'name': '',
                    'type': 'tuple[]'
                }
            ],
            'stateMutability': 'view',
            'type': 'function',
            'constant': true
        },
        {
            'inputs': [],
            'name': 'getAllDonations',
            'outputs': [
                {
                    'components': [
                        {
                            'internalType': 'address',
                            'name': 'donator',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'projectAddress',
                            'type': 'address'
                        }
                    ],
                    'internalType': 'struct Dochaintion.Donation[]',
                    'name': '',
                    'type': 'tuple[]'
                }
            ],
            'stateMutability': 'view',
            'type': 'function',
            'constant': true
        }
    ];";

            var web3 = new Web3("https://rinkeby.infura.io/v3/84e023c064b1458eaedc358be5c8677a");
            var contract = web3.Eth.GetContract(abi, "0xC1Fb9DC8e518F51e8DcaED744DB43E7487204870");
            var function = contract.GetFunction("temp");
            var balanceFirstAmountSend = await function.CallAsync<string>();

            System.Diagnostics.Debug.WriteLine("All projects " + balanceFirstAmountSend);
        }

    }
}
