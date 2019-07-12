using System;
using System.Web;
using System.Web.Mvc;

using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

public class CustomJsonResult : JsonResult
{
    private const string _dateFormat = "yyyy-MM-dd HH:mm:ss";

    public CustomJsonResult(object data)
    {
        this.Data = data;
    }

    public override void ExecuteResult(ControllerContext context)
    {
        if (context == null)
        {
            throw new ArgumentNullException("context");
        }

        HttpResponseBase response = context.HttpContext.Response;

        if (!String.IsNullOrEmpty(ContentType))
        {
            response.ContentType = ContentType;
        }
        else
        {
            response.ContentType = "application/json";
        }
        if (ContentEncoding != null)
        {
            response.ContentEncoding = ContentEncoding;
        }
        if (Data != null)
        {
            // Using Json.NET serializer
            var isoConvert = new IsoDateTimeConverter();
            isoConvert.DateTimeFormat = _dateFormat;
            response.Write(JsonConvert.SerializeObject(Data, isoConvert));
        }
    }
}