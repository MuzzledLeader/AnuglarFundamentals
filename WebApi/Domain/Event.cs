using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Domain
{
    public class Event
    {
        public static List<Event> Events = new List<Event>(
            new[] {
                new Event(1, "Event 1", DateTime.Now.AddDays(2), "08:00", 2.5, "https://www.beliefnet.com/columnists/everydayinspiration/files/2015/02/have-fun.jpg", new Location("By the station", "Burton upon Trent", "UK"), null, new[] { new Session(1, "Session 1", "Andy", 1, "Max", "Fun and more fun.", new[] { "andy" }) })
            });

        public int id { get; set; }

        public string name { get; set; }

        public DateTime date { get; set; }

        public string time { get; set; }

        public double price { get; set; }

        public string imageUrl { get; set; }

        public Location location { get; set; }

        public string onlineUrl { get; set; }

        public List<Session> sessions { get; set; } = new List<Session>();

        public Event()
        {
        }

        public Event(int id, string name, DateTime date, string time, double price, string imageUrl, Location location, string onlineUrl, Session[] sessions)
        {
            this.id = id;
            this.name = name;
            this.date = date;
            this.time = time;
            this.price = price;
            this.imageUrl = imageUrl;
            this.location = location;
            this.onlineUrl = onlineUrl;
            this.sessions = new List<Session>(sessions);
        }
    }
}