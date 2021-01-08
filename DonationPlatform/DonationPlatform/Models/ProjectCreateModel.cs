using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace DonationPlatform.Models
{
    public class ProjectCreateModel
    {
        [DisplayName("Wallet adres : ")]
        public string _projectAddress { get; set; }
        [DisplayName("Project naam : ")]
        public string _name { get; set; }
        [DisplayName("Organisatie : ")]
        public string _organisation { get; set; }
        [DisplayName("Beschrijving : ")]
        public string _description { get; set; }
    }
}
