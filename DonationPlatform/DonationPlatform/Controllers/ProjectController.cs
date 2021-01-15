using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using DonationPlatform.Models;

namespace DonationPlatform.Controllers
{
    public class ProjectController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Details(int? id)
        {
            ProjectModel project = new ProjectModel("Project" + id);

            if(id == null)
            {
                project = new ProjectModel("Unknown");
            }

            return View(project);
            
        }

        public IActionResult NotFound()
        {
            return View();
        }


    }
}
