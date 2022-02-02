using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VAII_2021.Models
{
    public class PaymentDetail
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string CardOwner { get; set; }
        public string CardNumber { get; set; }
        public string ExpirationDate { get; set; }
        public string SecurityCode { get; set; }

        public ApplicationUser User { get; set; }
    }
}
