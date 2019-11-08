using System;
using System.Collections.Generic;
using System.Text;

namespace ContactList.Domain.Entities
{
    public class Person : BaseEntity
    {
        public string Name { get; set; }
        public IEnumerable<Phone> Phones { get; set; }
        public IEnumerable<Email> Emails { get; set; }
    }
}
