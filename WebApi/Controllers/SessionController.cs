using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApi.Controllers
{
    using System.Configuration;

    using WebApi.Domain;

    public class SessionController : Controller
    {
        [HttpGet]
        [Route("api/currentIdentity")]
        public ActionResult GetLoggedInUser()
        {
            return Json(Session["LoggedInUser"] as User, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [Route("api/login")]
        public ActionResult Login(string username, string password)
        {
            var user = Domain.User.Users.FirstOrDefault(u => u.username == username && u.password == password);

            if (user != null)
            {
                if (Session["LoggedInUser"] == null)
                {
                    Session.Add("LoggedInUser", user);
                }
                else
                {
                    Session["LoggedInUser"] = user;
                }
            }

            return new CustomJsonResult(new { user = user });
        }

        [HttpPost]
        [Route("api/logout")]
        public ActionResult Logout()
        {
            Session.Abandon();

            return new EmptyResult();
        }

        [HttpPut]
        [Route("api/users/{userId}")]
        public ActionResult Update(int userId, User user)
        {
            var foundUser = Domain.User.Users.FirstOrDefault(u => u.id == userId);
            if (foundUser != null)
            {
                foundUser.firstname = user.firstname;
                foundUser.lastname = user.lastname;
            }

            return new EmptyResult();
        }
    }
}