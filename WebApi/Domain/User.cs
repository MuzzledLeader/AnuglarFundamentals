namespace WebApi.Domain
{
    using System.Runtime.Serialization;
    using System.Web.Script.Serialization;

    using Newtonsoft.Json;

    public class User
    {
        public static User[] Users = new[] { new User(1, "andy", "andy", "Andy", "Wyatt") };

        public int id { get; set; }

        public string username { get; set; }
        
        [ScriptIgnore]
        [IgnoreDataMember]
        [JsonIgnore]
        public string password { get; set; }

        public string firstname { get; set; }

        public string lastname { get; set; }

        public User()
        {
            
        }

        public User(int id, string username, string password, string firstname, string lastname)
        {
            this.id = id;
            this.username = username;
            this.password = password;
            this.firstname = firstname;
            this.lastname = lastname;
        }
    }
}