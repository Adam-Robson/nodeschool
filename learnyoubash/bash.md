# bash

Bash is a free Unix shell created by Brian Fox for the GNU Project.

Released in 1989, as an altenative to the
[Bourne shell](https://en.wikipedia.org/wiki/Bourne_shell), it is distributed as
the default shell in Linux and OS X systems to this day and remains one of the
most powerful and portable tools for writing efficient scripts for all
Unix-based systems.

## Two modes of operation

Bash can be used in two different ways.

One can use bash interactively, by feeding commands into the screen interface
and getting a result.

One can also use bash non-interactively, by feeding bash a file or piping it a
stream.

## script

```bash
touch hi.bash
```

Write the shebang `#!/usr/bin/env bash`

And then write `echo "Hello world!"`

Then in the shell, run:

```bash
chmod +x hi.bash
./hi.bash
```

## VARIABLES

Like in most programming languages, you can also create variables in bash.

Bash knows no data types. Variables can contain only numbers or a string of one
or more characters. There are three kinds of variables you can create:

- local variables,
- environment variables,
- variables as positional arguments.

## Local variables

Local variables are variables that exist only within a single script. They are
inaccessible to other programs and scripts. A local variable can be declared
using = sign (as a rule, there should not be any spaces between a variable's
name, = and its value) and its value can be retrieved using the $ sign. For
example:

```bash
  foo="value"  # declare variable
  echo $foo # display value
  unset foo    # delete variable
```

The variables can be used inside strings. But there is an important difference
between double and single quotes. Inside double quotes variables are expanded.
Inside single quotes they are not. For example:

```bash
     NAME="Denys"
     echo "My name is $NAME" #> My name is Denys
     echo 'My name is $NAME' #> My name is $NAME
```

## Environment variables

Sometimes we need to declare variables which will be accessible from outside the
current shell session, for other programs, scripts, etc. These variables are
called environment variables. They are created just like local variables, but
using the keyword export instead.

```bash
    export GLOBAL_VAR="I am a global variable"
```

There are a lot of global variables in bash. You will meet these variables
fairly often, so here is a quick lookup table with the most practical ones:

---

| Variable | Description                 |
| :------: | :-------------------------- |
|  $HOME   | The current user's          |
|          | home directory              |
|  $USER   | The current user            |
|  $PATH   | A colon-separated           |
|          | list of directories         |
|          | in which the shell          |
|          | looks for commands          |
|   $PWD   | The current working         |
|          | directory                   |
| $RANDOM  | Random integer between      |
|          | 0 and 32767                 |
|   $UID   | The numeric real userID     |
|          | of the current user.        |
|   $PS1   | The primary prompt string   |
|   $PS2   | The secondary prompt string |

---

You may find extended list of environment variables in Bash:

`<http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_02.html#sect_03_02_04>`

## POSITIONAL PARAMETERS (Exercise 3 of 11)

Now you already know how to define local and environment variables. But what are
you going to use when you need to get parameters from the outside? For those
purposes you may use positional parameters.

Positional parameters are variables allocated when a function is evaluated and
they are given positionally. The following table lists positional parameter
variables and other special variables and their meanings when you are inside a
function.

## Parameter Description

$0 Script's name.
$1 … $9 The parameter list elements from 1 to 9.
${10} …
${N} The parameter list elements from 10 to N.
$\* or
$@ All positional parameters except $0.
$# The number of parameters, not counting
$0.
$FUNCNAME The function name (has a value only inside a function).

In the example below, the positional parameters will be $0='./script.sh',
$1='foo' and $2='bar':

```bash
./script.sh foo bar
```

## Default values

Variables may also have default values. We can define them as such using the
following syntax:

```bash
# Assign FOO value 'default' if it's empty
FOO=${FOO:-'default'}
```

Default values may be useful when you should process the positional parameters,
which could be omitted.

Create a file named parameters.bash that outputs only the first, third and fifth
positional arguments with their sequence number followed by a colon : Before
each argument with every parameter outputted on tseparate lines.

For example, if you run the script like so:

```bash
./parameters.bash one two three four five six seven
```

The output must look like the following:

```bash
1: one
3: three
5: five
```

## ARRAYS (Exercise 4 of 11)

If you are already familiar with arrays in other programming languages, you
won't be surprised here.

An array in bash is a variable that allows you to refer to multiple values. In
bash, arrays are also zero-based, that is, the first element in an array has an
index of 0.

When dealing with arrays, we should be aware of the special environment variable
IFS. IFS or Input Field Separator — is the character that separates elements in
an array. The default value is an empty space IFS=' '.

### Array declaration

In bash you create an array by simply assigning a value to an index in the array
variable:

```bash
fruits[0]=Apple
fruits[1]=Pear
fruits[2]=Plum
echo ${fruits[*]} # echo ${fruits[@]} may be used as well
```

Array variables can also be created using compound assignments such as:

```bash
  fruits=(Apple Pear Plum)
```

### Array slice

Also, we can extract a slice of an array using the slice operators:

```bash
     echo ${fruits[*]:0:2} # Apple Pear
     echo ${@:1:2} # slice of positional parameters
```

In the example above, fruits[*] returns the entire contents of the array, and
:0:2 extracts the slice of length 2, that starts at index 0.

### Adding elements into an array

Adding elements into an array is quite simple too. Compound assignments are
specially useful in this case. We can use them like this:

```bash
  fruits=(Orange ${fruits[*]} Banana Cherry)
     echo ${fruits[*]} # Orange Apple Pear Plum Banana Cherry
```

In the example above, fruits[*] represents the entire contents of the array and
substitutes it into the compound assignment, then assigns the new value into the
fruits array, mutating its original value.

### Deleting elements from an array

To delete an element from an array, use the unset command:

```bash
unset fruits[0]
     echo ${fruits[*]} # Apple Pear Plum Banana Cherry
```

## SHELL EXPANSIONS (Exercise 5 of 11)

Expansions are a mechanism to calculate arithmetical operations, to save results
of command's executions and so on.

### Brace expansion

Brace expansions allow us to generate arbitrary strings. It's similar to
filename expansion. For example:

```bash
     echo beg{i,a,u}n # begin began begun
```

Also brace expansions may be used for creating ranges, which are iterated over
in loops.

```bash
     echo {0..5} # 0 1 2 3 4 5
     echo {00..8..2} # 00 02 04 06 08
```

### Command substitution

Command substitution allow us to evaluate a command and substitute its value
into another command or variable assignment. Command substitution is performed
when a command is enclosed by `` or $(). For example, we can use it as follows:

```bash
     now=`date +%T`
     # or
     now=$(date +%T)

     echo $now # 19:08:26
```

### Arithmetic expansion

In bash we are free to do any arithmetic operations. But the expression must be
enclosed by $(( )). The format for arithmetic expansions is:

```bash
     result=$(( ((10 + 5*3) - 7) / 2 ))
     echo $result # 9
```

## STREAMS PIPES AND LISTS (Exercise 6 of 11)

This exercise is very important because streams, pipes, and lists of commands
are used everywhere. You will meet these strange > and | characters in almost
any script. So let's discover the secret to what they exactly are.

### Streams

Bash receives input and sends output as sequences or streams of characters.
These streams may be redirected into files or vice versa.

There are three descriptors:

Code Descriptor Description

0 stdin The standard input. 1 stdout The standard output. 2 stderr The errors
output.

Redirection makes it possible to control where the output of a command goes to,
and where the input of a command comes from. For redirecting streams these
operators are used:

Operator Description

> Redirecting output

&> Redirecting output and error output

&>>Appending redirected output and error output

< Redirecting input

<< [Here documents](http://tldp.org/LDP/abs/html/here-docs.html) syntax
<<<[Here strings](http://www.tldp.org/LDP/abs/html/x17837.html)

Here are a few examples of using redirections:

```bash
# output of ls will be written to list.txt

ls -l > list.txt

# append output to list.txt

ls -a >> list.txt

# all errors will be written to errors.txt

grep da \* 2> errors.txt

# read from errors.txt

less < errors.txt

```

### Pipes

We could redirect standard streams not only in files, but also to other
programs. Pipes let us use the output of a program as the input of another.

In the example below, command1 sends its output to command2, which then passes
it on to the input of command3:

```bash
command1 | command2 | command3
```

Constructions like this are called pipelines.

In practice, this can be used to process data through several programs. For
example, here the output of ls -l is sent to the grep program, which prints only
files with a .md extension, and this output is finally sent to the less program:

```bash
ls -l | grep .md$ | less
```

### Lists of commands

A list of commands is a sequence of one or more pipelines separated by ;, &, &&
or || operator.

If a command is terminated by the control operator &, the shell executes the
command asynchronously in a subshell. In other words, this command will be
executing in the background.

Commands separated by a ; are executed sequentially: one after another. The
shell waits for the finish of each command.

```bash
  # command2 will be executed after command1
  command1 ; command2
```

```bash
 # which is the same as
 command1
 command2
```

Lists separated by && and || are called AND and OR lists, respectively.

The AND-list looks like this:

```bash
  # command2 will be executed if, and only if,
  # command1 finishes successfully (returns 0 exit status)
  command1 && command2
```

The OR-list has the form:

```bash
  # command2 will be executed if, and only if, command finishes unsuccessfully (returns code of error)
  command1 || command2
```

The return code of AND and OR lists the exit status of the last executed
command.

## IF CONDITIONAL STATEMENT (Exercise 7 of 11)

Like in other languages, Bash conditionals let us decide whether to perform an
action or not. The result is determined by evaluating an expression, which
should be enclosed in [[]].

Conditional expression may contain && and || operators, which are AND and OR
respectively. Beside this, there are many
[other handy expressions](https://github.com/denysdovhanbash-handbook#primary-and-combining-expressions).

Before we start, let's see what primaries are.

### Primary and combining expressions

Expressions enclosed inside [[]] (or [ ] for sh) are called test commands or
primaries. These expressions help us to indicate results of a conditional. In
the tables below, we are using [ ], because it works for sh too. Here is an
answer about
[the difference between double and single square brackets in bash](http://serverfault.com/a/52050).

Working with the file system:

---

|       Primary       | Meaning                                |
| :-----------------: | :------------------------------------- |
|     [ -e FILE ]     | True if FILE exists.                   |
|     [ -d FILE ]     | True if FILE exists and is a dir.      |
|     [ -r FILE ]     | True if FILE exists and is readable.   |
|     [ -w FILE ]     | True if FILE exists and is writable.   |
|     [ -x FILE ]     | True if FILE exists and is executable. |
| [ FILE1 -nt FILE2 ] | FILE1 is newer than FILE2.             |
| [ FILE1 -ot FILE2 ] | FILE1 is older than FILE2.             |

---

Working with strings:

Primary Meaning

[ -z STR ] STR is empty (the length is zero). [ -n STR ] STR is not empty (the
length is non-zero). [ STR1 == STR2 ] STR1 and STR2 are equal. [ STR1 != STR2 ]
STR1 and STR2 are not equal.

Arithmetic binary operators:

Primary Meaning

[ ARG1 -eq ARG2 ] ARG1 is equal to ARG2. [ ARG1 -ne ARG2 ] ARG1 is not equal to
ARG2. [ ARG1 -lt ARG2 ] ARG1 is less than ARG2. [ ARG1 -le ARG2 ] ARG1 is less
than or equal to ARG2. [ ARG1 -gt ARG2 ] ARG1 is greater than ARG2. [ ARG1 -ge
ARG2 ] ARG1 is greater or equal to ARG2.

Conditions may be combined using these combining expressions:

---

| Operation | Effect | | [ ! EXPR ] | True if EXPR is false | | [ EXPR ] |
Returns the value of EXPR | | [ EXPR1 -a EXPR2 ] | Logical AND True if both are
true | | [ EXPR1 -o EXPR2 ] | Logical OR True if EXPR1 or EXPR2 are true. |

---

Of course, there are more useful primaries and you can easily find them in the
[Bash man pages](http://www.gnu.org/software/bash/manual/html_node/Bash-Conditional-Expressions.html)

### Using an if statement

if statements work the same as in other programming languages. If the expression
within the braces is true, the code between then and fi is executed. fi
indicates the end of the conditionally executed code.

```bash
# Single-line

if [[1 -eq 1]]; then echo "true"; fi

# Multi-line

if [[1 -eq 1]]; then echo "true" fi
```

Likewise, we could use an if..else statement such as:

```bash
# Single-line

if [[2 -ne 1]]; then echo "true"; else echo "false"; fi

     # Multi-line
     if [[ 2 -ne 1 ]]; then
       echo "true"
     else
       echo "false"
     fi
```

Sometimes if..else statements are not enough to do what we want to do. In this
case we shouldn't forget about the existence of if..elif..else statements, which
always come in handy.

Look at the example below:

```bash
if [[`uname` == "Adam"]]; then
  echo "Do not eat an apple!"
elif [[`uname` == "Eva"]]; then
  echo "Do not take an apple!" else echo
"Apples are delicious!"
fi
```

## CASE CONDITIONAL STATEMENT (Exercise 8 of 11)

If you are confronted with a couple of different possible actions to take, then
using a case statement may be more useful than nested if statements. For more
complex conditions use a case statement like below:

```bash
     case "$FRUIT" in
       (apple)
         echo 'Mmmmh... I like apple!'
         ;;
       (banana)
         echo 'Hm, a bit awry, no?'
         ;;
       (orange|tangerine)
         echo "I don't like it!" && exit 1
       ;;
       (*)
         echo "Unknown fruit - sure it isn't toxic?"
       ;;
     esac
```

Each case is an expression matching a pattern. The | sign is used for separating
multiple patterns, and the ) operator terminates a pattern list. The commands
for the first match are executed. \* is the pattern for anything else that
doesn't match the defined patterns. Each block of commands should be divided
with the ;; operator.

## LOOPS (Exercise 9 of 11)

Here we won't be surprised. As in any programming language, a loop in bash is a
block of code that iterates as long as the control conditional is true.

There are four types of loops in Bash: for, while, until and select.

### for loop

The for loop is very similar to its sibling in C. It looks like this:

```bash
     for arg in elem1 elem2 ... elemN
     do
       # statements
     done
```

During each pass through the loop, arg takes on the value from elem1 to elemN.
Values may also be wildcards or [brace expansion](#brace-expansion).

Also, we can write a for loop in one line, but in this case there needs to be a
semicolon before do, like below:

```bash
     for i in {1..5}; do echo $i; done
```

By the way, if for..in..do seems a little bit weird to you, you can also write
for in C-like style such as:

```bash
     for (( i = 0; i < 10; i++ )); do
       echo $i
     done
```

for is handy when we want to do the same operation over each file in a
directory. For example, if we need to move all .bash files into the script
folder and then give them execute permissions, our script would look like this:

```bash
     #!/bin/bash

     for FILE in $HOME/*.bash; do
       mv "$FILE" "${HOME}/scripts"
       chmod +x "${HOME}/scripts/${FILE}"
     done
```

### while loop

The while loop tests a condition and loops a sequence of commands so long as
that condition is true. A condition is nothing more than the primary used in
if..then conditions. So a working example with while loop might look like this:

```bash
     #!/bin/bash

     # Squares of numbers from 0 through 9
     x=0
     while [[ $x -lt 10 ]]; do # value of x is less than 10
       echo $(($x * $x))
       x=`expr $x + 1` # increase x
     done
```

Just like in the case of the for loop, if we want to write do and the condition
in the same line, then we must use a semicolon before do.

### until loop

The until loop is the exact opposite of the while loop. Like a while loop it
checks a test condition, but it keeps looping as long as this condition is
false:

```bash
     until [[ condition ]]; do
       #statements
     done
```

### Loop control

There are situations when we need to stop a loop before its normal ending or
step over an iteration. In these cases, we can use the shell built-in break and
continue statements. Both of these work with every kind of loop.

The break statement is used to exit the current loop before its ending.

The continue statement steps over one iteration. We can use it as such:

```bash
     for (( i = 0; i < 10; i++ )); do
       if [[ $(($i % 2)) == 0 ]]; then continue; fi
       echo $i
     done
```

If we run the example above, it will print all odd numbers from 0 through 9.

We haven't mentioned the select loop.

The select loop helps us to organize a user menu

It has almost the same syntax as a for loop:

```bash
    select answer in elem1 elem2 ... elemN
    do
      # statements
    done
```

The select prints all elem1..elemN on the screen with their sequence numbers,
after that it prompts the user. Usually it looks like $? (PS3 variable). The
answer will save in answer.

If answer is the number between 1..N, then statements will execute and select
will go to the next iteration — that's because we should use break statement.

A working example might look like this:

```bash
    #!/bin/bash

    PS3="Choose the package manager: "
    select ITEM in bower npm gem pip
    do
      echo -n "Enter the package name: " && read PACKAGE
      case $ITEM in
        bower) bower install $PACKAGE ;;
        npm)   npm   install $PACKAGE ;;
        gem)   gem   install $PACKAGE ;;
        pip)   pip   install $PACKAGE ;;
      esac
      break # avoid infinite loop
    done
```

This example, asks the user what package manager to use. Then, it will ask what
package we want to install and finally proceed to install it.

If we run this, we will get:

```bash
    $ ./my_script
    1) bower
    2) npm
    3) gem
    4) pip
    Choose the package manager: 2
    Enter the package name: bash-handbook
    <installing bash-handbook>
```

## Functions

In scripts we have the ability to define and call functions. As in any
programming language, functions in bash are chunks of code, but there are other
differences.

In bash, functions are a sequence of commands grouped under a single name, that
is the name of the function. Calling a function is the same as calling any other
program, you just write the name and the function will be invoked.

We can declare our own function this way:

```bash
     my_func () {
       # statements
     }

     my_func # call my_func
```

We must declare functions before we can invoke them.

Functions can take on arguments and return a result — exit code.

Arguments, within functions, are treated in the same manner as arguments given
to the script in non-interactive mode - using positional parameters. A result
code can be returned using the return command.

Below is a function that takes a name and returns 0, indicating successful
execution.

```bash
     # function with params
     greeting () {
       if [[ -n $1 ]]; then
         echo "Hello, $1!"
       else
         echo "Hello, unknown!"
       fi
       return 0
     }

     greeting World  # Hello, World!
     greeting        # Hello, unknown!
```

The return command without any arguments returns the exit code of the last
executed command. Above, return 0 will return a successful exit code 0.

We can also declare a variable local to a single function using the local
keyword. Doing so causes the variable to disappear when the function exits.

```bash
local local_var="I'm a local value"
```
