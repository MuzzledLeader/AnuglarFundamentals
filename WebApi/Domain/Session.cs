using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Domain
{
    public class Session
    {
        public int id { get; set; }

        public string name { get; set; }

        public string presenter { get; set; }

        public int duration { get; set; }

        public string level { get; set; }

        public string @abstract { get; set; }

        public List<string> voters { get; set; } = new List<string>();

        public Session()
        {
        }

        public Session(int id, string name, string presenter, int duration, string level, string @abstract, string[] voters)
        {
            this.id = id;
            this.name = name;
            this.presenter = presenter;
            this.duration = duration;
            this.level = level;
            this.@abstract = @abstract;
            this.voters = new List<string>(voters);
        }
    }
}