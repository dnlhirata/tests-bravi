using System;
using System.Collections.Generic;
using System.Text;

namespace ContactList.Domain.Entities
{
    public class Person : BaseEntity
    {
        public string Name { get; set; }
        public Phone Phone { get; set; }
        public Email Email { get; set; }
    }
}
