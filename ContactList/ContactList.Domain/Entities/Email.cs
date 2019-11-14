using System;
using System.Collections.Generic;
using System.Text;

namespace ContactList.Domain.Entities
{
    public class Email : BaseEntity
    {
        public string EmailAddress { get; set; }
        public string Type { get; set; }
        public bool IsPrimary { get; set; }
        public long PersonId { get; set; }
    }
}
