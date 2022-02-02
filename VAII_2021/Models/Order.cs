using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VAII_2021.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public string UserId { get; set; }
        public decimal TotalPrice { get; set; }
        public string NameOfBuyer { get; set; }
        public string SurnameOfBuyer { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string ZipCode { get; set; }
        public string Street { get; set; }
        public string StreetNum { get; set; }
        public string MobileNumber { get; set; }
        public string EmailAddress { get; set; }

        public ApplicationUser User;
        public ICollection<EshopItem> EshopItem;
    }
}
