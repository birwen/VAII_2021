using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VAII_2021.Models
{
    public class EshopItem
    {
        [Key]
        public int EshopItemId { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string DetailOfItem { get; set; }
        public string ImageUrl { get; set; }
        public int Stock { get; set; }
    }
}
