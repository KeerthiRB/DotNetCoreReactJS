using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotNetCoreReactJSApp.Model;

namespace dotNetCoreReactJSApp.GetData
{
    public class ClaimsData : IClaimsData
    {
        public List<ClaimsEntity> GetClaims()
        {
            return new List<ClaimsEntity>()
            {
                new ClaimsEntity(){ ClaimID=1234,ClaimType="Merchant", ClaimsAmount=200, ClaimsStatus="Created", ClaimsTransactions= new List<string>(){
                    "12345678945235","124577896355"
                }
                },
                new ClaimsEntity(){ ClaimID=1235,ClaimType="ATM", ClaimsAmount=250, ClaimsStatus="Created", ClaimsTransactions= new List<string>(){
                    "12345678945235","124577896355"
                }
                },
                new ClaimsEntity(){ ClaimID=1236, ClaimType="Fraud", ClaimsAmount=100, ClaimsStatus="Created", ClaimsTransactions= new List<string>(){
                    "12345678945235","124577896355"
                }
                }
            };
        }
    }

    public interface IClaimsData
    {
        public List<ClaimsEntity> GetClaims();
    }
}
