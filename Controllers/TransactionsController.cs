using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotNetCoreReactJSApp.GetData;
using dotNetCoreReactJSApp.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dotNetCoreReactJSApp.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class TransactionsController : ControllerBase
    {
        private readonly ITransactionData _transactionData;
        public TransactionsController(ITransactionData transactionData)
        {
            _transactionData = transactionData;
        }
        [Route("gettransactions")]
        public List<TransactionDetails> GetTransaction()
        {
            return _transactionData.GetTransactionDetails();
        }
    }
}