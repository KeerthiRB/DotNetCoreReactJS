using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotNetCoreReactJSApp.Model
{
    public class ClaimsEntity
    {
        public int ClaimID { get; set; }
        public string ClaimType { get; set; }
        public decimal ClaimsAmount { get; set; }

        public List<String> ClaimsTransactions { get; set; }
        public string ClaimsStatus { get; set; }
    }
}
