using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace ContactList.Domain.Entities
{
    public class Person : BaseEntity
    {
        public string Name { get; set; }
        public IEnumerable<Phone> Phones { get; set; }
        public IEnumerable<Email> Emails { get; set; }
    }
}
