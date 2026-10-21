---
title: "Can Infinitely Many Lines Become a Curve?"
description: "Zeta at one, harmonic points, changing slopes, and the shape hiding between them."
slug: "harmonic-curve"
date: 2026-10-21T13:00:00+02:00
math: true
graphs: true
image: "https://upload.wikimedia.org/wikipedia/commons/6/65/HarmonicPartialSumsLog.svg"
tags: ["Harmonic series", "Interpolation", "Calculus"]
---

The Riemann zeta function is usually introduced, for real \(s>1\), through the series

\[
\zeta(s)=\sum_{n=1}^{\infty}\frac1{n^s}.
\]

At \(s=2\), this gives the familiar \(\pi^2/6\). So what if the exponent is reduced to \(1\)? The terms are still becoming smaller, after all:

\[
1+\frac12+\frac13+\frac14+\frac15+\cdots.
\]

The sum is called the **harmonic series**. It doesn't converge, but there's a different way to approach it that makes the behaviour surprisingly visible. Instead of staring at the infinite expression, plot each finite partial sum and connect consecutive points with straight lines. Do infinitely many short line segments begin to look like a curve?

Write

\[
H_n=\sum_{k=1}^{n}\frac1k.
\]

The first points are \((1,1)\), \((2,\tfrac32)\), \((3,\tfrac{11}{6})\), \((4,\tfrac{25}{12})\). They keep moving to the right and up, but each increase is smaller than the previous one. In fact, we can calculate the **slope of every segment** directly from two consecutive points:

\[
\begin{aligned}
m_n
&=\frac{H_{n+1}-H_n}{(n+1)-n}\\
&=H_{n+1}-H_n\\
&=\frac1{n+1}.
\end{aligned}
\]

So the line joining the points at \(n\) and \(n+1\) has the equation

\[
L_n(x)=H_n+\frac{x-n}{n+1},\qquad n\le x\le n+1.
\]

That's already an exact answer to one question. There is a continuous, piecewise-linear function passing through every harmonic point. Its slopes are \(\tfrac12,\tfrac13,\tfrac14,\ldots\), and each is smaller than the last.

{{< mm-graph kind="harmonic" >}}
The straight segments connect exact harmonic partial sums. The comparison curve \(\ln x+\gamma\) is close for large \(x\), but does not generally pass through the same points.
{{< /mm-graph >}}

The shape looks logarithmic. That makes sense because the slopes behave like \(1/x\), which happens to be the derivative of \(\ln x\). But the graph hides two questions: does getting flatter mean that the sum eventually stops growing, and is this polygonal chain the *only* curve through the points?

### Getting flatter is not the same as converging

The slope tends to zero:

\[
\lim_{n\to\infty}\frac1{n+1}=0.
\]

That doesn't say that the total height is bounded. A logarithm also gets flatter and flatter and still grows without limit. To decide what happens to \(H_n\), we have to look at the accumulated increases, not just the size of the latest one.

There's a simple argument that uses **no integrals at all**. Group the terms of the harmonic series into blocks of doubling length:

\[
1+\frac12
+\left(\frac13+\frac14\right)
+\left(\frac15+\frac16+\frac17+\frac18\right)+\cdots.
\]

In the block from \(2^j+1\) to \(2^{j+1}\), there are \(2^j\) fractions, each at least \(1/2^{j+1}\). Multiplying that lower bound by the number of terms gives at least \(1/2\) for **every whole block**. Therefore

\[
H_{2^m}\ge1+\frac m2.
\]

As \(m\) becomes arbitrarily large, so does the right-hand side. The harmonic series diverges even though the individual differences between its partial sums tend to zero.

### Why a logarithm appears

An integral gives a sharper description of the shape. Because \(1/x\) decreases, the areas of rectangles of width one bound the harmonic sums:

\[
\int_1^{n+1}\frac{dt}{t}\le H_n\le1+\int_1^n\frac{dt}{t}.
\]

Evaluating the integrals produces

\[
\ln(n+1)\le H_n\le1+\ln n.
\]

The grouping proof already showed divergence without calculus. The integral comparison explains **how fast** it diverges: logarithmically, rather than linearly or quadratically. There's even a finer statement:

\[
H_n=\ln n+\gamma+o(1),
\]

where \(\gamma\) is the Euler-Mascheroni constant, approximately \(0.57721\). In this context, \(o(1)\) means a difference that tends to zero. The exact harmonic points creep closer and closer to \(\ln n+\gamma\) as \(n\) increases, but the two expressions are not identical at every integer.

### And what does it mean to curve the lines?

There's a subtle problem with simply joining the dots. The polygonal interpolation \(L_n(x)\) is continuous, but it has **corners** at the integers: the slope arriving at an integer differs from the slope leaving it. Drawing more segments doesn't erase those corners at the fixed integer points.

There's also no single smooth curve forced on us by the data. Between \(n\) and \(n+1\), for example, a curved connection could be written as

\[
C_n(x)=H_n+\frac{x-n}{n+1}+c\sin\big(\pi(x-n)\big),
\qquad n\le x\le n+1.
\]

The sine term is zero at **both endpoints**, so every choice of \(c\) joins the same two points and bends differently between them. Repeating this between all consecutive integers gives infinitely many continuous interpolations. Additional conditions are needed to select a particular *smooth* one.

So there are three related but distinct things: the sequence of harmonic sums, the straight-line interpolation that passes through them exactly, and the logarithmic curve that describes their large-scale behaviour. Their shapes become close in a useful sense, but their definitions aren't interchangeable.

At \(s=1\), then, the defining zeta **series** doesn't converge to a finite number. In its wider analytic continuation, \(\zeta(s)\) has a pole there. Those ever-flattening line segments offer a fairly direct picture of why.
