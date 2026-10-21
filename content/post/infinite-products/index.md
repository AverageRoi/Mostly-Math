---
title: "Infinite Products and the Riemann Zeta Function"
description: "The same fractions behave very differently when we multiply instead of add."
slug: "infinite-products"
date: 2026-10-20T17:00:00+02:00
math: true
graphs: true
image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Partial_sums_riemann_zeta_function.svg"
tags: ["Infinite products", "Series", "Zeta function"]
---

Consider a fairly innocent expression:

\[
\prod_{n=1}^{\infty}\frac{1}{n^2}.
\]

The factors come from a familiar sequence, but there is something unusual about multiplying all of them rather than adding them. They're positive, the first one is exactly one, and every subsequent factor is smaller than the one before it. What happens if the multiplication never stops?

The easiest way to see the answer is to forget infinity for a moment and write down the first few factors:

\[
1\cdot\frac14\cdot\frac19\cdot\frac1{16}\cdots\frac1{N^2}.
\]

The denominator is a product of squares. That means the partial product is

\[
\begin{aligned}
P_N
&=\prod_{n=1}^{N}\frac1{n^2}\\
&=\frac1{1^2\cdot2^2\cdot3^2\cdots N^2}\\
&=\frac1{(1\cdot2\cdot3\cdots N)^2}\\
&=\frac1{(N!)^2}.
\end{aligned}
\]

The factorial also has a connection to another special function, Gamma. For positive integers, \(\Gamma(N+1)=N!\), so the same partial product can be written as \(P_N=1/[\Gamma(N+1)]^2\). The Gamma notation extends the factorial, but it doesn't change what happens in the limit.

So there's no need to multiply an impossible number of terms. Since the factorial grows without bound, its reciprocal squared shrinks to zero:

\[
\lim_{N\to\infty}P_N=0.
\]

That also clears up a misleading way of looking at the expression. **It isn't \(1^\infty\)** just because the first factor equals one. The factors are different numbers, and their finite products are already falling rapidly: \(1,\tfrac14,\tfrac1{36},\tfrac1{576},\ldots\). Infinity here means taking the limit of those products, not treating infinity as an ordinary exponent.

Now change just one symbol:

\[
\sum_{n=1}^{\infty}\frac{1}{n^2}.
\]

This is the [Basel problem](https://en.wikipedia.org/wiki/Basel_problem). Its answer is not zero and not infinity. Euler proved that

\[
\sum_{n=1}^{\infty}\frac1{n^2}=\frac{\pi^2}{6}\approx1.644934.
\]

The terms are identical, but the operation changes the story completely. Adding positive fractions that get small quickly enough can produce a nonzero finite number. Multiplying fractions smaller than one can drive the result to zero.

{{< mm-graph kind="products" >}}
The partial sums approach \(\pi^2/6\), while the partial products approach zero. Both sequences start at one, then separate almost immediately.
{{< /mm-graph >}}

### Turning multiplication into addition

There is an obvious bridge between sums and products: logarithms. For a finite collection of positive factors,

\[
\ln\left(\prod_{n=1}^{N}a_n\right)
=\sum_{n=1}^{N}\ln a_n.
\]

But this does **not** mean that taking the logarithm of the original product produces the Basel series. Keeping every step visible makes the difference clear:

\[
\begin{aligned}
\ln\left(\prod_{n=1}^{N}\frac1{n^2}\right)
&=\sum_{n=1}^{N}\ln\left(\frac1{n^2}\right)\\
&=\sum_{n=1}^{N}(-2\ln n)\\
&=-2\ln(N!).
\end{aligned}
\]

The sum now contains **logarithms of the fractions**, not the fractions themselves. And as \(N\) grows, that logarithm tends to negative infinity, consistent with the product tending to zero. We can't simply cancel the logarithm and declare that \(\sum1/n^2\) is the logarithm of the product.

Products can encode sums, but the choice of factors matters. If we deliberately used \(e^{a_n}\) as our factors, their product would be \(e^{\sum a_n}\). That would be a new product, not the one we started with.

### The product hidden inside zeta

This brings us to the Riemann zeta function. For real \(s>1\), its series definition is

\[
\zeta(s)=\sum_{n=1}^{\infty}\frac1{n^s}.
\]

In particular, \(\zeta(2)=\pi^2/6\). But Euler found a second description using multiplication, not over **all integers**, but over the **prime numbers**:

\[
\zeta(s)=\prod_{p\text{ prime}}\frac1{1-p^{-s}},\qquad s>1.
\]

Why primes? Each factor can be expanded as a geometric series:

\[
\frac1{1-p^{-s}}=1+p^{-s}+p^{-2s}+p^{-3s}+\cdots.
\]

When the prime factors are multiplied together, a typical chosen term looks like \(2^{-as}3^{-bs}5^{-cs}\cdots\). Unique prime factorization means that every positive integer is represented exactly once. The multiplication reconstructs the sum over all integers.

So the two products are completely different objects:

\[
\prod_{n=1}^{\infty}\frac1{n^2}=0,
\qquad
\prod_{p\text{ prime}}\frac1{1-p^{-2}}=\frac{\pi^2}{6}.
\]

It's a strange connection. The first product collapses because its factors keep shrinking. Euler's product works because its prime-based factors are all greater than one and approach one. The same notation, two rather different mechanisms.

The series definition also makes the next question hard to ignore: what happens when the exponent is \(1\), where the terms become \(1/n\)? That question leads to [the harmonic series and a curve made of lines](/p/harmonic-curve/).
