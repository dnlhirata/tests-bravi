using System;
using System.Collections.Generic;
using System.Linq;

namespace balanced_brackets
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(ValidateBracketsOrder("{([])}()[][()][{]"));
        }

        private static bool ValidateBracketsOrder(string brackets)
        {
            if (String.IsNullOrEmpty(brackets))
            {
                return false;
            }

            var leftBrackets = new char[] {'{', '[', '('};
            var rightBrackets = new char[] {'}', ']', ')'};
            var bracketsCombinations = new Dictionary<char, char>
            {
                { '{', '}' },
                { '[', ']' },
                { '(', ')' },
            };

            var stack = new Stack<char>();

            foreach (var ch in brackets.ToCharArray())
            {

                if (leftBrackets.Contains(ch))
                    stack.Push(ch);

                if (!rightBrackets.Contains(ch)) continue;

                if (stack.Count == 0)
                    return false;

                var lastElement = stack.Peek();
                if (bracketsCombinations[lastElement] == ch)
                    stack.Pop();
            }

            return stack.Count == 0;
        }
    }


}
