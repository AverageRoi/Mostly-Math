---
title: "Iterated Logarithms"
description: "A very long quotient-rule derivative, and a remarkably distant minimum."
slug: "iterated-logarithms"
date: 2026-10-20T21:00:00+02:00
math: true
graphs: true
image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Logarithmic_functions.svg"
tags: ["Logarithms", "Derivatives", "Asymptotics"]
---

This is one of those expressions that looks much more complicated when written out than it turns out to be:

\[
f(x)=\frac{\log_{10}(\log_{10}(\log_{10}x))}{\log_{10}(\log_{10}(\log_{10}(\log_{10}x)))}.
\]

There are three logarithms in the numerator and four in the denominator. That one extra logarithm is enough to make the function surprisingly awkward. These are **iterated logarithms**, meaning logarithms repeatedly applied to the result of the previous one.

Here \(\log_{10}\) really means **base ten**, as in the original calculation. This matters when differentiating: the derivative of \(\log_{10}x\) is \(1/(x\ln10)\), not \(1/x\). Changing every logarithm to a natural logarithm would give us a different function.

### The derivative, without disguising the nesting

The quotient rule itself is straightforward:

\[
\left(\frac{A(x)}{B(x)}\right)'=
\frac{A'(x)B(x)-A(x)B'(x)}{B(x)^2}.
\]

The difficulty is finding the two derivatives inside it. For the numerator, the chain rule has to be applied three times, with a factor of \(\ln10\) at every layer:

\[
\begin{aligned}
&\frac{d}{dx}\log_{10}(\log_{10}(\log_{10}x))\\
&\quad=\frac{1}{x(\ln10)^3\log_{10}x\,\log_{10}(\log_{10}x)}.
\end{aligned}
\]

And the four-layer denominator gives

\[
\begin{aligned}
&\frac{d}{dx}\log_{10}(\log_{10}(\log_{10}(\log_{10}x)))\\
&\quad=\frac{1}{x(\ln10)^4\log_{10}x\,\log_{10}(\log_{10}x)\,\log_{10}(\log_{10}(\log_{10}x))}.
\end{aligned}
\]

Notice the powers: \((\ln10)^3\) and \((\ln10)^4\). They are **not** \(\ln1000\) and \(\ln10000\). For instance \(\ln1000=3\ln10\), which is different from \((\ln10)^3\).

Now substitute those two derivatives **directly** into the quotient rule. The expression is long, but no change of variable is needed:

\[
\begin{aligned}
f'(x)
&=\frac{1}{\big[\log_{10}(\log_{10}(\log_{10}(\log_{10}x)))\big]^2}\\[5pt]
&\quad\cdot\Bigg[
\frac{\log_{10}(\log_{10}(\log_{10}(\log_{10}x)))}{x(\ln10)^3\log_{10}x\,\log_{10}(\log_{10}x)}\\[8pt]
&\qquad-\frac{\log_{10}(\log_{10}(\log_{10}x))}{x(\ln10)^4\log_{10}x\,\log_{10}(\log_{10}x)\,\log_{10}(\log_{10}(\log_{10}x))}
\Bigg].
\end{aligned}
\]

Most of the enormous numerator cancels only **after** this step. The fully simplified derivative becomes

\[
\boxed{
f'(x)=\frac{(\ln10)\,\log_{10}(\log_{10}(\log_{10}(\log_{10}x)))-1}{x(\ln10)^4\,\log_{10}x\,\log_{10}(\log_{10}x)\,\big[\log_{10}(\log_{10}(\log_{10}(\log_{10}x)))\big]^2}
}.
\]

The original expression has not disappeared. It's still in the derivative, but now one small subtraction in the numerator controls its sign.

### A minimum at a truly absurd number

Before using the derivative, there's a domain restriction. All the logarithms need valid positive inputs, so \(x>10^{10}\). There is also a forbidden point where the whole denominator of the **original function** is zero:

\[
\log_{10}(\log_{10}(\log_{10}(\log_{10}x)))=0
\quad\Longleftrightarrow\quad x=10^{10^{10}}.
\]

On the branch beyond that asymptote, every factor in the derivative's denominator is positive. A stationary point therefore occurs when its numerator is zero:

\[
\begin{aligned}
(\ln10)\,\log_{10}(\log_{10}(\log_{10}(\log_{10}x)))-1&=0,\\
\log_{10}(\log_{10}(\log_{10}(\log_{10}x)))&=\frac1{\ln10}.
\end{aligned}
\]

Now \(\log_{10}e=1/\ln10\). Undoing the nested logarithms one at a time gives

\[
\begin{aligned}
\log_{10}(\log_{10}(\log_{10}x))&=e,\\
\log_{10}(\log_{10}x)&=10^e,\\
\log_{10}x&=10^{10^e},\\
x&=10^{10^{10^e}}.
\end{aligned}
\]

The location is almost comically large, even though the value of the function there is simple:

\[
f\big(10^{10^{10^e}}\big)=\frac{e}{\log_{10}e}=e\ln10\approx6.259.
\]

This is a minimum on the **positive branch** of the function. On the other side of the excluded point, the function is negative and has no global lower bound. It's not correct to call the stationary point the minimum over the entire domain.

### Making the graph readable

Ordinary horizontal axes aren't especially useful for an input like \(10^{10^{10^e}}\). On the plot, the horizontal coordinate is the value of the *three-times-iterated logarithm*, \(u=\log_{10}(\log_{10}(\log_{10}x))\). That's a choice of plotting scale, **not a substitution used to take the derivative**. The visible curve is \(u/\log_{10}u\), with a vertical asymptote at \(u=1\) and a positive-branch minimum at \(u=e\).

{{< mm-graph kind="logarithms" >}}
The graph uses the compressed horizontal coordinate \(u=\log_{10}(\log_{10}(\log_{10}x))\). The original \(x\)-scale is much too large to display meaningfully.
{{< /mm-graph >}}

That is the odd part of iterating logarithms. The final shape is manageable, yet the interesting behaviour takes place at inputs that are almost impossible to write without towers of exponents. Adding one more logarithm would push the scale even further away.
