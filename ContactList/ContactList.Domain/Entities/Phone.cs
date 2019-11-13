using System;
using System.Collections.Generic;
using System.Text;

namespace ContactList.Domain.Entities
{
    public class Phone : BaseEntity
    {
        public string Number { get; set; }
        public bool IsWhatsApp { get; set; }
        public Person Person { get; set; }
    }
}
