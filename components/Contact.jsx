'use client'
import { Mail, MapPin, User } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-600">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT CONTACT DETAILS — SLIDE IN (FIXED) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <span className="text-green-600">Managing</span> Partners
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <User className="text-green-600" />
                  <p className="text-gray-700">
                    <strong>N Sathish Kumar</strong> : 9047777171
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <User className="text-green-600" />
                  <p className="text-gray-700">
                    <strong>R Dilipan</strong> : 9150136106
                  </p>
                </div>
              </div>
            </div>

            <InfoCard
              icon={<MapPin />}
              title="Office Address"
              value="New No: 38, Old No: 22, Valluvar North Street, Jaihindpuram, Madurai - 625011"
            />

            <InfoCard
              icon={<Mail />}
              title="Mail Us At"
              value="msddevelopersmdu@gmail.com"
            />
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-sm"
          >
            <div className="space-y-4">
              <input className="w-full border px-4 py-3 rounded-md" placeholder="Full Name" />
              <input className="w-full border px-4 py-3 rounded-md" placeholder="Email Address" />
              <input className="w-full border px-4 py-3 rounded-md" placeholder="Phone Number" />
              <textarea className="w-full border px-4 py-3 rounded-md" rows="4" placeholder="Tell us about your project..." />
              <button className="w-full bg-green-600 text-white py-3 rounded-md font-semibold">
                Send Message
              </button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, title, value }) {
  return (
    <div className="flex gap-4 bg-white p-6 rounded-xl shadow-sm">
      <div className="w-12 h-12 bg-green-100 text-green-600 flex items-center justify-center rounded-lg">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">{value}</p>
      </div>
    </div>
  )
}
