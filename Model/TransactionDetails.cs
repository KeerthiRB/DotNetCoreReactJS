using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotNetCoreReactJSApp.Model
{
    public class TransactionDetails
    {
        public string TransactionId { get; set; }
        public string TransactionDate { get; set; }
        public string TransactionFrom { get; set; }
        public string TransactionNote { get; set; }
        public int TransactionAmount { get; set; }
    }
}
