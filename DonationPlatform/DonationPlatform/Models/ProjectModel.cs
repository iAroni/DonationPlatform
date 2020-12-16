using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DonationPlatform.Models
{
    public class ProjectModel
    {
        private string _name;
        private string _description;
        private int _goal;
        private int _currentGoal;

        //Constructors
        public ProjectModel()
        {
            this._name = "unknown";
            this._description = "unknown";
            this._goal = 0;
            this._currentGoal = 0;
        }

        public ProjectModel(string name)
        {
            this._name = name;
            this._description = "This is just a random description to say the auto set goal is 10000 cause I can";
            this._goal = 10000;
            this._currentGoal = 0;
        }

        public ProjectModel(string name, string description, int goal)
        {
            this._name = name;
            this._description = description;
            this._goal = goal;
            this._currentGoal = 0;
        }

        //Getter and Setters
        public string Name { get { return _name; } set { _name = value; } }
        public string Description { get { return _description; } set { _description = value; } }
        public int Goal { get { return _goal; } set { _goal = value; } }
        public int CurrentGoal { get { return _currentGoal; } set { _currentGoal = value; } }

    }
}
