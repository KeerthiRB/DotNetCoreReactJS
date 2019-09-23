using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using dotNetCoreReactJSApp.Model;
using dotNetCoreReactJSApp.GetData;

namespace dotNetCoreReactJSApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClaimsController : ControllerBase
    {
        private readonly IClaimsData _claimsData;
        public ClaimsController(IClaimsData claimsData)
        {
            _claimsData = claimsData;
        }
        [Route("GetClaims")]
        public List<ClaimsEntity> GetClaims()
        {
            return _claimsData.GetClaims();
        }

        [Route("GetClaim")]
        public ClaimsEntity GetClaim()
        {
            return _claimsData.GetClaims().FirstOrDefault();
        }
    }
}