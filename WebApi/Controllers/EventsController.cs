using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApi.Controllers
{
    using System.Web.Http;

    using WebApi.Domain;

    public class EventsController : Controller
    {
        // GET: Events
        [System.Web.Mvc.HttpGet]
        [System.Web.Mvc.Route("api/events")]
        public ActionResult Index()
        {
            return new CustomJsonResult(Event.Events.ToArray());
        }

        [System.Web.Mvc.HttpGet]
        [System.Web.Mvc.Route("api/events/{id}")]
        public ActionResult Get(int id)
        {
            return new CustomJsonResult(Event.Events.FirstOrDefault(e => e.id == id));
        }

        [System.Web.Mvc.HttpPost]
        [System.Web.Mvc.Route("api/events")]
        public ActionResult Save([FromBody]Event @event)
        {
            if (@event.id == 0)
            {
                @event.id = Event.Events.Max(e => e.id) + 1;
            }

            var foundEvent = Event.Events.FirstOrDefault(e => e.id == @event.id);

            if (foundEvent == null)
            {
                Event.Events.Add(@event);
            }
            else
            {
                Event.Events[Event.Events.IndexOf(foundEvent)] = @event;
            }

            return new CustomJsonResult(@event);
        }

        [System.Web.Mvc.HttpPost]
        [System.Web.Mvc.Route("api/events/{eventId}/sessions/{sessionId}/voters/{username}")]
        public ActionResult Vote(int eventId, int sessionId, string username)
        {
            var session = Event.Events.FirstOrDefault(e => e.id == eventId)?.sessions.FirstOrDefault(s => s.id == sessionId);
            if (session != null)
            {
                if (!session.voters.Contains(username))
                {
                    session.voters.Add(username);
                }
            }

            return new EmptyResult();
        }

        [System.Web.Mvc.HttpDelete]
        [System.Web.Mvc.Route("api/events/{eventId}/sessions/{sessionId}/voters/{username}")]
        public ActionResult UnVote(int eventId, int sessionId, string username)
        {
            var session = Event.Events.FirstOrDefault(e => e.id == eventId)?.sessions.FirstOrDefault(s => s.id == sessionId);
            if (session != null)
            {
                if (session.voters.Contains(username))
                {
                    session.voters.Remove(username);
                }
            }

            return new EmptyResult();
        }
    }
}