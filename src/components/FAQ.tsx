"use client";

import ScrollProgress from "@/components/ScrollProgress";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCode, FaPencilRuler, FaChartBar } from "react-icons/fa";

import { SiShopify, SiFigma } from "react-icons/si";

export default function ServicesPage() {
  return (
    <section className="container mx-auto px-6 max-w-7xl py-12">
      <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        <details className="group rounded-2xl p-5 bg-purple-800/8">
          <summary className="cursor-pointer font-medium text-white list-none">
            How long does a typical website project take?
          </summary>
          <div className="mt-3 text-gray-300 text-sm">
            Timelines vary by scope, a website design and development can be
            completed and delivered in few days to weeks depending on the
            complexity. I’ll share a clear timeline after the discovery call.
          </div>
        </details>

        <details className="group rounded-2xl p-5 bg-purple-800/8">
          <summary className="cursor-pointer font-medium text-white list-none">
            Do you work with clients outside my country?
          </summary>
          <div className="mt-3 text-gray-300 text-sm">
            Yes, I work with clients globally. We communicate over email, calls,
            and collaboration tools to keep things smooth.
          </div>
        </details>

        <details className="group rounded-2xl p-5 bg-purple-800/8">
          <summary className="cursor-pointer font-medium text-white list-none">
            Will I be able to update the site myself?
          </summary>
          <div className="mt-3 text-gray-300 text-sm">
            Absolutely. I can build sites on WordPress or provide a simple admin
            panel and documentation so you can make edits easily.
          </div>
        </details>

        <details className="group rounded-2xl p-5 bg-purple-800/8">
          <summary className="cursor-pointer font-medium text-white list-none">
            Can you handle both design and development?
          </summary>
          <div className="mt-3 text-gray-300 text-sm">
            Yes, I handle everything from UI/UX design to front-end and basic
            back-end development. This helps maintain a consistent look and feel
            across your project.
          </div>
        </details>

        <details className="group rounded-2xl p-5 bg-purple-800/8">
          <summary className="cursor-pointer font-medium text-white list-none">
            Do you redesign existing websites?
          </summary>
          <div className="mt-3 text-gray-300 text-sm">
            Definitely. I can audit your current website, modernize its layout,
            improve performance, and enhance user experience without losing your
            existing content or SEO value.
          </div>
        </details>

        <details className="group rounded-2xl p-5 bg-purple-800/8">
          <summary className="cursor-pointer font-medium text-white list-none">
            What do you need from me to get started?
          </summary>
          <div className="mt-3 text-gray-300 text-sm">
            I’ll need your brand assets (logo, colors, content, etc.), a short
            description of your goals, and any reference websites or
            inspirations you have in mind.
          </div>
        </details>

        <details className="group rounded-2xl p-5 bg-purple-800/8">
          <summary className="cursor-pointer font-medium text-white list-none">
            What if I need support after launch?
          </summary>
          <div className="mt-3 text-gray-300 text-sm">
            I offer ongoing support and maintenance options — or one-off
            updates. We can discuss the right plan for your needs.
          </div>
        </details>

        <details className="group rounded-2xl p-5 bg-purple-800/8">
          <summary className="cursor-pointer font-medium text-white list-none">
            Can you integrate third-party tools like payment gateways or booking
            systems?
          </summary>
          <div className="mt-3 text-gray-300 text-sm">
            Absolutely. I can integrate systems like Paystack, Stripe, WhatsApp,
            Calendly, or others that fit your business workflow.
          </div>
        </details>

        <details className="group rounded-2xl p-5 bg-purple-800/8">
          <summary className="cursor-pointer font-medium text-white list-none">
            What if I don’t have a design idea yet?
          </summary>
          <div className="mt-3 text-gray-300 text-sm">
            No problem at all. I’ll help you with creative direction — from
            color palette and typography to layout suggestions — that align
            perfectly with your brand personality.
          </div>
        </details>
      </div>
    </section>
  );
}
