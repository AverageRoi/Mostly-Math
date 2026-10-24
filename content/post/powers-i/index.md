---
title: "What Happens Between the Powers of i?"
description: "Four repeating numbers, continuous rotations, an imaginary exponent, and a hidden choice of direction."
slug: "between-powers-of-i"
date: 2026-10-24T19:00:00+02:00
math: true
graphs: false
image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Euler%27s_formula.svg"
tags: ["Complex numbers", "Euler's formula", "Exponentiation"]
---

The powers of the imaginary unit seem to have nowhere new to go. Start multiplying by \(i\), and the same four numbers repeat:

\[
\begin{aligned}
i^0&=1,\\
i^1&=i,\\
i^2&=-1,\\
i^3&=-i,\\
i^4&=1.
\end{aligned}
\]

Every integer power lands on one of four points. But that leaves a peculiar question: **what happens between them?** If \(i^1\) is a quarter-turn from \(1\), could \(i^{1/2}\) be half of that turn? And if we can use fractional exponents, what happens when the exponent itself is imaginary, as in \(i^i\)?

The temptation is to treat \(i\) as though it *were* an angle, writing something like \(i=90^\circ\) and taking the square root of 90. That doesn't work: an angle describes a complex number's position, but is not the complex number itself. The geometric idea behind it, though, is worth following.

### Multiplication as rotation

A complex number \(a+bi\) can be represented by the point \((a,b)\) in a plane. Multiplying it by \(i\) gives

\[
(a+bi)i=ai+bi^2=-b+ai.
\]

So multiplication by \(i\) takes the point \((a,b)\) to \((-b,a)\). That is precisely a counterclockwise rotation of \(90^\circ\) around the origin. Its distance from the origin stays unchanged, because

\[
(-b)^2+a^2=a^2+b^2.
\]

Starting from \(1=(1,0)\), repeated multiplication therefore visits \(i=(0,1)\), \(-1=(-1,0)\), \(-i=(0,-1)\), and finally returns to \(1\). The cycle in the powers isn't an accident of arithmetic; it is a sequence of quarter-turns around the **unit circle**.

So perhaps fractional powers describe fractional turns. Let's check rather than assume.

### A point halfway between 1 and i

To find a square root of \(i\), look for a complex number \(w=a+bi\) satisfying \(w^2=i\). Expanding,

\[
(a+bi)^2=(a^2-b^2)+2abi.
\]

Equating real and imaginary parts gives two simultaneous conditions:

\[
\begin{cases}
a^2-b^2=0,\\
2ab=1.
\end{cases}
\]

The first says \(a^2=b^2\). The second says \(a\) and \(b\) have the same sign, so \(a=b\). Therefore \(2a^2=1\), and the two solutions are

\[
\boxed{w=\pm\frac{1+i}{\sqrt2}.}
\]

The *principal* square root is the positive choice, \((1+i)/\sqrt2\). Its real and imaginary parts are equal, so it lies at an angle of \(45^\circ\), exactly halfway from \(1\) to \(i\) along the shorter arc. Squaring it doubles the angle and lands at \(i\).

But **there are two square roots**, not one. The negative choice is at \(225^\circ\), and squaring that also lands at \(90^\circ\). Already, the apparently obvious idea of a halfway rotation has introduced a choice.

### Turning four points into a continuous function

To describe any point on the unit circle, we can use its angle \(\theta\):

\[
R(\theta)=\cos\theta+i\sin\theta.
\]

The addition formulas for sine and cosine imply that multiplying two such points adds their angles:

\[
R(\alpha)R(\beta)=R(\alpha+\beta).
\]

One multiplication by \(i\) means adding \(\pi/2\) radians. A natural way to describe \(x\) such steps, even for noninteger \(x\), is

\[
\boxed{F(x)=\cos\left(\frac{\pi x}{2}\right)+i\sin\left(\frac{\pi x}{2}\right).}
\]

At \(x=0,1,2,3,4\), this reproduces the original four powers. At \(x=1/2\), it gives \((1+i)/\sqrt2\). As \(x\) runs continuously through the real numbers, the point runs continuously around the circle, completing one revolution whenever \(x\) increases by four.

This also explains the oscillation. If we plotted the real part against \(x\), we would get a cosine wave; the imaginary part would be a sine wave. **Each coordinate oscillates, while the complex number itself rotates.**

The notation \(i^x\) is usually assigned to this function when we use the *principal* complex logarithm. To understand why, we need an exponential that can rotate.

### Why an exponential can trace a circle

Euler's formula states that

\[
\boxed{e^{i\theta}=\cos\theta+i\sin\theta.}
\]

It is not merely a geometric analogy. Expanding the exponential in its power series and separating even and odd powers of \(i\) gives

\[
\begin{aligned}
e^{i\theta}
&=1+i\theta+\frac{(i\theta)^2}{2!}+\frac{(i\theta)^3}{3!}+\cdots\\
&=\left(1-\frac{\theta^2}{2!}+\frac{\theta^4}{4!}-\cdots\right)
+i\left(\theta-\frac{\theta^3}{3!}+\cdots\right)\\
&=\cos\theta+i\sin\theta.
\end{aligned}
\]

Setting \(\theta=\pi/2\) yields \(i=e^{i\pi/2}\). This gives a compact expression for our continuous rotation:

\[
\boxed{i^x=e^{i\pi x/2}\qquad(x\in\mathbb R),}
\]

where, again, we have selected the principal value. The important feature is that **the exponent contains the angle**. Multiplying by \(i\) and changing an angle by \(90^\circ\) correspond to one another, but the number \(i\) is not equal to \(90^\circ\). That distinction also explains why \(i^{-1}=-i\), not \(1/90^\circ\).

### What if the exponent is i itself?

Now return to the stranger question: \(i^i\). Complex exponentiation is defined using a logarithm. With the principal logarithm, \(\operatorname{Log}i=i\pi/2\), so

\[
\begin{aligned}
i^i
&=\exp\big(i\operatorname{Log}i\big)\\
&=\exp\left(i\cdot\frac{i\pi}{2}\right)\\
&=\exp\left(-\frac{\pi}{2}\right).
\end{aligned}
\]

Thus

\[
\boxed{i^i=e^{-\pi/2}\approx0.207879576.}
\]

**An imaginary number raised to an imaginary power has produced a positive real number.** There is no contradiction. With a real exponent, the factor \(i\pi x/2\) is imaginary, and the exponential changes the angle without changing the distance from the origin. With an imaginary exponent, two factors of \(i\) multiply to \(-1\), so the exponential instead changes the distance.

We can see both effects at once. Let the exponent be \(z=a+bi\), where \(a,b\) are real. Then

\[
\begin{aligned}
i^{a+bi}
&=e^{(a+bi)i\pi/2}\\
&=e^{-\pi b/2}\,e^{i\pi a/2}\\
&=\boxed{e^{-\pi b/2}\left(\cos\frac{\pi a}{2}+i\sin\frac{\pi a}{2}\right).}
\end{aligned}
\]

The real part \(a\) of the exponent determines the **rotation**. Its imaginary part \(b\) determines the **scale**. In particular, \(i^{bi}=e^{-\pi b/2}\), which shrinks toward zero as \(b\) increases, rather than circling the origin.

### Did the four powers determine a unique path?

There is a final catch. We wrote \(i=e^{i\pi/2}\), but angles differing by a whole revolution identify the same point:

\[
i=e^{i(\pi/2+2\pi k)},\qquad k\in\mathbb Z.
\]

So, for every integer \(k\), we can construct a continuous function

\[
F_k(x)=e^{i(\pi/2+2\pi k)x}.
\]

For **every integer** \(n\), all these functions agree:

\[
F_k(n)=e^{i\pi n/2}e^{2\pi ikn}=i^n.
\]

And each has the same multiplication property, \(F_k(x+y)=F_k(x)F_k(y)\). Yet between the integers they take different routes. At \(x=1/2\), for example,

\[
F_0(1/2)=e^{i\pi/4},\qquad
F_1(1/2)=e^{i5\pi/4}=-e^{i\pi/4}.
\]

One path makes a quarter-turn as \(x\) goes from 0 to 1. The other makes **one full extra revolution** before arriving at exactly the same \(i\). Both respect all the original integer powers. Continuity, and even the law \(F(x+y)=F(x)F(y)\), do not choose between them.

That is why complex logarithms have branches. If we allow every possible angle for \(i\), the possible values obtained for \(i^i\) are

\[
\boxed{\left\{e^{-(\pi/2+2\pi k)}:k\in\mathbb Z\right\}.}
\]

The familiar value \(e^{-\pi/2}\) is the **principal value**, selected by taking \(k=0\). It is not the only value in the multivalued interpretation.

We started with a sequence of just four repeating points. Geometry filled the gaps with rotations, Euler's formula turned those rotations into exponentials, and an imaginary exponent turned rotation into scaling. But the last step revealed something less obvious: knowing every integer power determines **where we arrive**, not how many times we have travelled around the circle in between. A continuous extension can exist without being unique.

*Cover image: Gunther (original) and Wereon (SVG adaptation), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Euler%27s_formula.svg), CC BY-SA 3.0.*
