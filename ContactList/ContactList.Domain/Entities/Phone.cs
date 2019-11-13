using System;
using System.Collections.Generic;
using System.Text;

namespace ContactList.Domain.Entities
{
    public class Phone : BaseEntity
    {
        public string Number { get; set; }
        public string Type { get; set; }
        public bool IsPrimary { get; set; }
        public bool IsWhatsApp { get; set; }
        public long PersonId { get; set; }
    }
}
