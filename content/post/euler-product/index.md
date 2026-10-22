---
title: "Can Multiplying Infinite Sums Reveal the Primes?"
description: "An infinite product of zeta values, Euler's prime factorization, and two very different ways of approaching one."
slug: "infinite-products-euler-primes"
date: 2026-10-22T15:00:00+02:00
math: true
graphs: true
image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Mplwp_riemann_zeta_real_positive.svg"
tags: ["Infinite products", "Riemann zeta function", "Prime numbers"]
---

Start with an infinite product that looks simple enough:

\[
\prod_{n=1}^{\infty}\frac{1}{n^s}.
\]

For a finite upper limit \(N\), the terms can all be grouped into a factorial:

\[
\begin{aligned}
\prod_{n=1}^{N}\frac{1}{n^s}
&=\frac{1}{1^s}\cdot\frac{1}{2^s}\cdots\frac{1}{N^s}\\
&=\frac{1}{(1\cdot2\cdots N)^s}\\
&=\frac{1}{(N!)^s}.
\end{aligned}
\]

For any fixed \(s>0\), this tends to zero as \(N\to\infty\). At \(s=0\), it is 1; for \(s<0\), it grows without bound. So an outer sum over *all* integer values of \(s\) would not converge either. But what if the fractions were **summed first**, and the resulting sums were multiplied together instead? This is not a rearrangement of the same expression. Changing a sum into a product gives us a different problem:

\[
\boxed{P=\prod_{s=2}^{\infty}\left(\sum_{n=1}^{\infty}\frac{1}{n^s}\right).}
\]

Each inner sum is the Riemann zeta function, \(\zeta(s)\), so

\[
P=\zeta(2)\zeta(3)\zeta(4)\cdots.
\]

Every factor is greater than one. Does multiplying infinitely many of them give infinity, or can the factors approach one quickly enough to make the product converge?

### Why start at 2?

The defining series

\[
\zeta(s)=1+\frac{1}{2^s}+\frac{1}{3^s}+\cdots
\]

converges for **every real \(s>1\)**, not just for integers. So \(s=1.00000001\) is completely valid as an argument of \(\zeta\). The reason for starting our product at 2 is that the product index follows the integers \(2,3,4,\ldots\), and 2 is the first integer greater than 1.

At exactly \(s=1\), the series becomes the divergent harmonic series. Starting an *integer-indexed* product at \(1.00000001\) would require shifting the entire sequence of exponents. We can do that, but first there is a more basic question: does the product beginning at 2 even converge?

### When the factors approach 1

As \(s\) increases, all the terms after the initial 1 become smaller. For \(s\ge2\), we can make that precise:

\[
\begin{aligned}
0<\zeta(s)-1
&=\sum_{n=2}^{\infty}\frac{1}{n^2}\frac{1}{n^{s-2}}\\
&\le\frac{1}{2^{s-2}}\sum_{n=2}^{\infty}\frac{1}{n^2}\\
&=\frac{\zeta(2)-1}{2^{s-2}}\longrightarrow0.
\end{aligned}
\]

Thus \(\zeta(s)\to1\) as \(s\to\infty\). Still, **factors approaching 1 do not automatically guarantee a convergent product**. The factors \(1+1/s\) also approach 1, but their infinite product diverges.

What matters is how quickly the extra amount above 1 disappears. Here, an unexpectedly neat calculation works:

\[
\begin{aligned}
\sum_{s=2}^{\infty}(\zeta(s)-1)
&=\sum_{s=2}^{\infty}\sum_{n=2}^{\infty}\frac{1}{n^s}\\
&=\sum_{n=2}^{\infty}\sum_{s=2}^{\infty}\left(\frac1n\right)^s\\
&=\sum_{n=2}^{\infty}\frac{1/n^2}{1-1/n}\\
&=\sum_{n=2}^{\infty}\frac{1}{n(n-1)}\\
&=\sum_{n=2}^{\infty}\left(\frac{1}{n-1}-\frac1n\right)\\
&=1.
\end{aligned}
\]

All the terms are nonnegative, so we can exchange the two sums. The inner one is geometric, and the final one telescopes. **The total of all the excesses \(\zeta(s)-1\) is exactly 1.**

Taking logarithms is the natural way to study a product. Since \(\ln x\le x-1\) for \(x>0\),

\[
0<\sum_{s=2}^{N}\ln\zeta(s)
\le\sum_{s=2}^{N}(\zeta(s)-1)\le1.
\]

Therefore the increasing partial products are bounded above by \(e\). Our original product really does converge:

\[
\boxed{P=\prod_{s=2}^{\infty}\zeta(s)
\approx2.29485659167331.}
\]

It is neither zero nor infinity, despite containing infinitely many factors greater than one.

### Finding the primes inside the sum

There is a different way to construct a zeta value. Take a prime \(p\), and consider the geometric series of its powers:

\[
1+\frac1{p^s}+\frac1{p^{2s}}+\frac1{p^{3s}}+\cdots
=\frac{1}{1-p^{-s}},\qquad s>1.
\]

Now multiply one such series for every prime:

\[
\left(1+\frac1{2^s}+\frac1{2^{2s}}+\cdots\right)
\left(1+\frac1{3^s}+\frac1{3^{2s}}+\cdots\right)
\left(1+\frac1{5^s}+\cdots\right)\cdots.
\]

Expanding the parentheses produces reciprocals of integers raised to \(s\). For example, choosing \(1/2^{2s}\) and \(1/3^s\) gives

\[
\frac1{2^{2s}}\cdot\frac1{3^s}=\frac1{12^s}.
\]

Because every positive integer has a **unique prime factorization**, each \(1/n^s\) appears exactly once. So the product of the prime-based geometric series recovers the original sum:

\[
\boxed{\zeta(s)=\sum_{n=1}^{\infty}\frac1{n^s}
=\prod_{p\ \mathrm{prime}}\frac{1}{1-p^{-s}},\qquad s>1.}
\]

This is **Euler's product formula**. A sum over *every positive integer* turns into a product over *only the primes*. The primes encode all the integers because multiplying their powers is precisely how integers are built.

### Putting Euler's product into the original expression

Substituting this identity into \(P\) gives

\[
\begin{aligned}
P
&=\prod_{s=2}^{\infty}\zeta(s)\\
&=\prod_{s=2}^{\infty}\prod_{p\ \mathrm{prime}}\frac{1}{1-p^{-s}}\\
&=\prod_{p\ \mathrm{prime}}\prod_{s=2}^{\infty}\frac{1}{1-p^{-s}}.
\end{aligned}
\]

The exchange of products is valid here because their positive logarithmic terms have a finite sum. Instead of grouping factors by exponent, we can group them by prime. For instance, the first prime contributes

\[
\prod_{s=2}^{\infty}\frac{1}{1-2^{-s}}
=\frac{1}{1-1/4}\cdot\frac{1}{1-1/8}\cdot\frac{1}{1-1/16}\cdots
\approx1.73137331,
\]

while the prime 3 contributes about \(1.19020823\). Every further prime adds another factor, and their combined product is still \(P\).

It is possible to go one step further using

\[
-\ln(1-x)=\sum_{r=1}^{\infty}\frac{x^r}{r},\qquad |x|<1.
\]

Taking the logarithm of the prime product and expanding,

\[
\begin{aligned}
\ln P
&=-\sum_p\sum_{s=2}^{\infty}\ln(1-p^{-s})\\
&=\sum_p\sum_{r=1}^{\infty}\frac1r\sum_{s=2}^{\infty}p^{-sr}\\
&=\sum_p\sum_{r=1}^{\infty}\frac1r\frac{p^{-2r}}{1-p^{-r}}\\
&=\sum_p\sum_{r=1}^{\infty}\frac{1}{r\,p^r(p^r-1)}.
\end{aligned}
\]

So we also have the exact representation

\[
\boxed{P=\exp\left(\sum_{p\ \mathrm{prime}}\sum_{r=1}^{\infty}
\frac{1}{r\,p^r(p^r-1)}\right).}
\]

The original product of sums has become a sum organized by prime numbers. No approximate identities were needed to get here.

### Does the product itself ever approach 1?

The *individual values* \(\zeta(s)\) approach 1, but the full product beginning at 2 stays at about 2.29486. If instead we discard the early factors and begin farther and farther out, we get a **tail product**:

\[
T_m=\prod_{s=m}^{\infty}\zeta(s).
\]

For example, \(T_3\approx1.39511\), \(T_5\approx1.07232\), and \(T_{10}\approx1.00198\). Because the series \(\sum_{s=2}^{\infty}\ln\zeta(s)\) converges, its remaining tail tends to zero. Hence

\[
\ln T_m=\sum_{s=m}^{\infty}\ln\zeta(s)\longrightarrow0,
\qquad\boxed{T_m\longrightarrow1.}
\]

This is a justified limit, not an attempt to treat the indeterminate expression \(1^\infty\) as though it were automatically equal to 1.

### What about starting at 1.00000001?

The situation reverses if we move the *starting exponent* toward 1 instead of moving it toward infinity. Let

\[
P_{\varepsilon}=\prod_{k=1}^{\infty}\zeta(k+\varepsilon),
\qquad\varepsilon>0.
\]

For \(\varepsilon=0.00000001\), this begins with \(\zeta(1.00000001)\), then \(\zeta(2.00000001)\), and so on. Each individual factor is finite, and the infinite product still converges for every fixed \(\varepsilon>0\).

But the first factor becomes enormous as \(\varepsilon\to0^+\). The decreasing function \(x^{-1-\varepsilon}\) gives the integral bounds

\[
\int_1^{\infty}x^{-1-\varepsilon}\,dx
\le\zeta(1+\varepsilon)
\le1+\int_1^{\infty}x^{-1-\varepsilon}\,dx.
\]

Evaluating the integral without skipping the antiderivative,

\[
\int_1^{\infty}x^{-1-\varepsilon}\,dx
=\left[-\frac{x^{-\varepsilon}}{\varepsilon}\right]_1^{\infty}
=\frac1\varepsilon,
\]

so

\[
\frac1\varepsilon\le\zeta(1+\varepsilon)
\le1+\frac1\varepsilon,
\qquad\zeta(1+\varepsilon)\sim\frac1\varepsilon.
\]

Here \(\sim\) means that the ratio of the two sides tends to 1. The remaining factors approach our original product \(P\), which means

\[
\boxed{P_{\varepsilon}\sim\frac{P}{\varepsilon}
\quad\text{as }\varepsilon\to0^+.}
\]

With \(\varepsilon=10^{-8}\), the value is approximately \(229{,}485{,}658.54\). At exactly \(s=1\), the defining zeta **series** is the divergent harmonic series. For real \(s<1\), that original series also fails to converge; the analytically continued zeta function is a different way to assign values, not a license to use the series or Euler's prime product outside their convergence region.

The distinction is easy to miss: as **\(s\to\infty\)**, the value **\(\zeta(s)\to1\)**, and the product's tails approach 1. But as **\(s\to1^+\)**, the value **\(\zeta(s)\to\infty\)**, and the shifted product blows up. Between those two limits, an innocent-looking product of sums has revealed why prime factorization governs the zeta function in the first place.

*Cover image: Geek3, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mplwp_riemann_zeta_real_positive.svg), CC BY 3.0.*
