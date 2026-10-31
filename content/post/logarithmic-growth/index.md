---
title: "How Can a Function Grow Forever While Its Derivatives Vanish?"
description: "The logarithm, shrinking differences, and two infinite limits that refuse to agree."
slug: "logarithm-keeps-growing"
date: 2026-10-31T14:00:00+01:00
math: true
graphs: false
image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Mplwp_ln.svg"
tags: ["Logarithms", "Derivatives", "Limits", "Calculus"]
---

The graph of the natural logarithm has a strange shape. It rises quickly at first, then more and more slowly. Far enough to the right, it looks almost horizontal. That raises an apparently reasonable question: **if a function keeps getting flatter, does it eventually stop growing?**

Take

\[
g(x)=\ln x,\qquad x>0.
\]

Its derivative is \(g'(x)=1/x\), which approaches zero as \(x\) increases. Its second derivative, \(-1/x^2\), also approaches zero. As it turns out, so does every derivative of any fixed positive order. Yet \(\ln x\) itself grows without bound. The interesting part is not merely that this happens, but how we can see it without even taking a derivative.

### What happens when we move one step to the right?

Instead of starting with the slope of a tangent, compare the function's value at \(x\) and \(x+1\). The increase is exactly

\[
\begin{aligned}
\ln(x+1)-\ln x
&=\ln\left(\frac{x+1}{x}\right)\\
&=\ln\left(1+\frac1x\right).
\end{aligned}
\]

Now \(1/x\to0\) as \(x\to\infty\), and the logarithm is continuous at 1. So

\[
\boxed{\ln(x+1)-\ln x
=\ln\left(1+\frac1x\right)\longrightarrow0.}
\]

This is an *arithmetic* description of the flattening. Moving one unit to the right always increases \(\ln x\), but the increase gets smaller. At \(x=1\), that step adds \(\ln2\approx0.6931\). At \(x=10\), it adds \(\ln(1.1)\approx0.0953\). At \(x=100\), it adds only \(\ln(1.01)\approx0.00995\).

We can even bound the difference using \(\ln(1+t)\le t\) for \(t>-1\):

\[
0<\ln(x+1)-\ln x\le\frac1x,\qquad x>0.
\]

Since the right-hand side tends to zero, the shrinking step is guaranteed. In fact, \(\ln(1+1/x)\sim1/x\) for large \(x\), where \(\sim\) means that the ratio of the two expressions approaches 1. The difference between consecutive values is becoming tiny, but it is **never zero**.

### If every step shrinks, why doesn't the growth end?

One might expect that adding smaller and smaller increments must eventually give a finite total. But that is not how infinite sums work. A sequence of positive terms can tend to zero while its accumulated sum grows forever.

For the logarithm, the increments telescope:

\[
\begin{aligned}
&[\ln2-\ln1]+[\ln3-\ln2]+\cdots\\
&\quad+[\ln(N+1)-\ln N]\\
&=\ln(N+1)-\ln1\\
&=\ln(N+1).
\end{aligned}
\]

Each bracket becomes smaller as we move along the sequence. But the sum need not settle at a finite value. To see why it doesn't, consider a different way of moving along the horizontal axis: **double \(x\) instead of adding one**.

The logarithm law gives

\[
\boxed{\ln(2x)-\ln x=\ln2.}
\]

No matter how large \(x\) is, doubling it increases its logarithm by exactly the same amount. The journey from 1 to 2 adds \(\ln2\); so does the journey from 2 to 4, from 4 to 8, and from 8 to 16. Each increase is the same height, but achieving it requires twice as much horizontal distance as before.

After \(m\) doublings,

\[
\ln(2^m)=m\ln2.
\]

The right-hand side can be made arbitrarily large by increasing \(m\). Therefore

\[
\boxed{\lim_{x\to\infty}\ln x=\infty.}
\]

There is no contradiction between the two observations. A **fixed horizontal step** produces a smaller and smaller vertical increase, while a **fixed vertical increase** requires a larger and larger horizontal step. That is precisely what the graph's increasingly flat shape tells us.

### What do the successive derivatives do?

The same behaviour appears through calculus. Differentiate \(\ln x\) repeatedly:

\[
\begin{aligned}
g'(x)&=\frac1x,\\
g''(x)&=-\frac1{x^2},\\
g'''(x)&=\frac2{x^3},\\
g^{(4)}(x)&=-\frac6{x^4},\\
g^{(5)}(x)&=\frac{24}{x^5}.
\end{aligned}
\]

The coefficients are \(1,1,2,6,24,\ldots\), the factorials. The signs alternate, and the power of \(x\) in the denominator increases by one every time. The general rule, for any positive integer \(n\), is

\[
\boxed{g^{(n)}(x)=\frac{(-1)^{n-1}(n-1)!}{x^n}.}
\]

We can verify it inductively: differentiating the expression for order \(n\) multiplies by \(-n\) and raises the denominator's exponent to \(n+1\), giving exactly the formula for order \(n+1\).

For **any fixed** positive integer \(n\), the factorial in the numerator is just a constant. The denominator \(x^n\) grows without bound, so

\[
\boxed{\lim_{x\to\infty}g^{(n)}(x)=0\qquad(n\ge1\text{ fixed}).}
\]

Not only does the slope tend to zero: all the higher derivatives do too, one fixed order at a time. The first derivative measures the slope, the second how that slope changes, and the higher derivatives describe successive changes of those changes. Nevertheless, none of these limits says that \(g(x)\) itself approaches a finite value.

### An unexpected problem with infinitely many derivatives

There is a subtle distinction in the phrase "all the derivatives tend to zero." We have been choosing an order \(n\), keeping that order fixed, and *then* letting \(x\) grow. What if we reverse the experiment: keep \(x\) fixed, and differentiate more and more times?

From the general formula, the magnitude of the \(n\)th derivative is

\[
a_n(x)=\left|g^{(n)}(x)\right|=\frac{(n-1)!}{x^n}.
\]

For any fixed \(x>0\), the ratio of consecutive magnitudes is

\[
\frac{a_{n+1}(x)}{a_n(x)}=\frac nx.
\]

Once \(n>x\), the magnitudes start increasing; eventually the ratio exceeds 2 and stays above 2. Consequently, the magnitudes do not just fail to approach zero: they grow without bound as \(n\to\infty\).

This gives two genuinely different iterated limits:

\[
\boxed{\lim_{n\to\infty}\left(\lim_{x\to\infty}|g^{(n)}(x)|\right)=0,}
\]

but

\[
\boxed{\lim_{x\to\infty}\left(\lim_{n\to\infty}|g^{(n)}(x)|\right)=\infty.}
\]

The second statement uses the extended value \(\infty\). We deliberately took absolute values: without them, the derivative signs alternate, so the sequence of derivatives at a fixed \(x\) does not converge to either a finite number or to a single signed infinity.

Thus the order of the two limiting operations **changes the answer completely**. There is no mysterious \(\infty/\infty\) expression to simplify. In one case the derivative order remains fixed while \(x\) grows; in the other, the factorial is allowed to grow while \(x\) stays fixed. Those are different mathematical questions.

### Is this special to logarithms?

Not entirely. For example, \(f(x)=\sqrt{x}\) also grows without bound while its first derivative, \(1/(2\sqrt{x})\), tends to zero. Its higher fixed-order derivatives also tend to zero. Meanwhile, \(h(x)=1-e^{-x}\) has a derivative that tends to zero *and* approaches a finite limit, namely 1.

So a vanishing slope alone cannot tell us whether the original function will stop growing. We need to know how its small increases **accumulate**. For \(\ln x\), the identity \(\ln(2x)-\ln x=\ln2\) provides the answer without requiring an integral or an infinite-derivative argument.

The graph only *looks* as though it is approaching a horizontal ceiling. There is no ceiling. Each one-unit increase of \(x\) adds less than the one before it, yet every doubling adds the same amount. The logarithm keeps rising forever, not because its growth ever speeds up again, but because **getting flatter is not the same thing as stopping**.

*Cover image: Geek3, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mplwp_ln.svg), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).*
