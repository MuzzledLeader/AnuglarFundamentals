using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Domain
{
    public class Location
    {
        public string address { get; set; }

        public string city { get; set; }

        public string country { get; set; }

        public Location()
        {
            
        }
        public Location(string address, string city, string country)
        {
            this.address = address;
            this.city = city;
            this.country = country;
        }
    }
}