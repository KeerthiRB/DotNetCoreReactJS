using dotNetCoreReactJSApp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotNetCoreReactJSApp.GetData
{
    public class TransactionData : ITransactionData
    {
        public List<TransactionDetails> GetTransactionDetails()
        {
            return new List<TransactionDetails>()
            {
                new TransactionDetails()
                {
                     TransactionAmount=100,
                      TransactionDate=DateTime.Now.AddDays(-10).ToLongDateString(),
                       TransactionFrom="Regions Bank",
                        TransactionId="1234567891234:1234",
                         TransactionNote="Return amount"
                },
                new TransactionDetails()
                {
                     TransactionAmount=150,
                      TransactionDate=DateTime.Now.AddDays(-11).ToLongDateString(),
                       TransactionFrom="American Express",
                        TransactionId="1234567891435:1237",
                         TransactionNote="Order place"
                },
                new TransactionDetails()
                {
                     TransactionAmount=50,
                      TransactionDate=DateTime.Now.AddDays(-17).ToLongDateString(),
                       TransactionFrom="Wal-Mart",
                        TransactionId="1234567891246:1232",
                         TransactionNote="Order Placed"
                },
                new TransactionDetails()
                {
                     TransactionAmount=300,
                      TransactionDate=DateTime.Now.AddDays(-12).ToLongDateString(),
                       TransactionFrom="HDFC",
                        TransactionId="1234567891284:1234",
                         TransactionNote="Gift amount"
                },
                new TransactionDetails()
                {
                     TransactionAmount=200,
                      TransactionDate=DateTime.Now.AddDays(-13).ToLongDateString(),
                       TransactionFrom="India Ture",
                        TransactionId="1234567891334:1634",
                         TransactionNote="Welcome amount"
                }
            };
        }
    }

    public interface ITransactionData
    {
        List<TransactionDetails> GetTransactionDetails();
    }
}
