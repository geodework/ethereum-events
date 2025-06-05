import { EPage, generateMetadata } from "@/lib/metadata"
import { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
  params: { pageType: EPage.PrivacyPolicy },
})

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8 lg:px-12 rounded-xl shadow-lg mt-8 mb-16">
      <h1 className="font-semibold text-3xl md:text-4xl mb-6 text-primary">
        Privacy Policy
      </h1>
      <div className="max-w-3xl space-y-6 text-secondary-700">
        <p className="text-sm text-secondary-400">Last Updated: June 4, 2025</p>

        <p>
          This Privacy Policy describes how General Index, LLC (dba Geodework)
          (the &quot;Company,&quot; &quot;we,&quot; &quot;us&quot; or
          &quot;our&quot;) collects, uses, stores, shares, and protects your
          information when you use this website (the &quot;Website&quot;).
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8">
          1. Important information
        </h2>
        <h3 className="text-xl font-semibold mt-4 mb-2 text-primary">
          Purpose of this privacy policy
        </h3>
        <p>
          We know how important privacy is to users of the Website, which is why
          we only collect the information we need and will not share your
          personal information with any third parties, unless necessary. Even
          within the Company, access to your personal information is limited to
          only those employees, contractors, and third-party services providers
          who require such information to handle matters related to the Website
          or services you request.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-primary">
          Changes to the privacy policy and your duty to inform us of changes
        </h3>
        <p>
          We may change this privacy policy from time to time. When we do make
          updates, we will let you know by changing the date at the top of this
          privacy policy. It is your responsibility to review this privacy
          policy periodically. If you keep using the Website, you consent to any
          updates to this privacy policy by using the Website once this privacy
          policy is updated.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-primary">
          Third-party links
        </h3>
        <p>
          The Website may include links to third-party websites, plug-ins, and
          applications. Clicking on those links or enabling those connections
          may allow third parties to collect or share data about you. We do not
          control these third-party websites and are not responsible for their
          privacy statements. When you leave the Website, we encourage you to
          read the privacy notice of every website you visit.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8">
          2. The data that will be collected
        </h2>
        <p>
          We need to collect personal information about you to provide you with
          certain services. Personal information means any information about an
          individual from which that person can be identified. It does not
          include data where the identity has been removed (anonymous data). We
          may collect, use, store and transfer different kinds of personal data
          about you which we have grouped together as follows:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Identity Data</strong> includes first name, birth name, last
            name, email address, or any other identity information you provide
            us.
          </li>
          <li>
            <strong>Technical Data</strong> includes internet protocol (IP)
            address, your login data, browser type and version, time zone
            setting and location, browser plug-in types and versions, operating
            system and platform and other technology on the devices you use to
            access the Website.
          </li>
          <li>
            <strong>Usage Data</strong> includes information about how you use
            the Website.
          </li>
          <li>
            <strong>Marketing and Communications Data</strong> includes your
            preferences in receiving marketing from us and our third parties and
            your communication preferences.
          </li>
          <li>
            <strong>Location Data</strong> includes information about your
            device location.
          </li>
        </ul>

        <p>
          We also collect, use, and share Aggregated Data such as statistical or
          demographic data for any purpose. Aggregated Data may be derived from
          your personal data but is not considered personal data in law as this
          data does not directly or indirectly reveal your identity. For
          example, we may aggregate your Usage Data to calculate the percentage
          of users accessing a specific app feature. However, if we combine or
          connect Aggregated Data with your personal data so that it can
          directly or indirectly identify you, we treat the combined data as
          personal data which will be used in accordance with this privacy
          policy.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8">
          3. How we collect your personal data
        </h2>
        <p>
          We use different methods to collect data from and about you including
          through:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Direct interactions.</strong> You may provide your Identity,
            Technical, Usage, Marketing and Communications and Location Data by
            submitting it through the Website.
          </li>
          <li>
            <strong>Automated technologies or interactions.</strong> When you
            interact with the Website, we may automatically collect Usage and
            Technical Data about your equipment, browsing actions and patterns.
            We collect this personal data by using cookies, server logs and
            other similar technologies. We may also receive Technical Data about
            you if you visit other websites employing our cookies.
          </li>
          <li>
            <strong>Third parties or publicly available sources.</strong> We may
            receive personal data about you from various third parties including
            Technical Data from analytics providers such as Google.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8">
          4. How we use your personal data
        </h2>
        <p>
          We collect all this information so that we can provide you with the
          Website safely and seamlessly. The information we collect allows us
          to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Deliver the full functionality of the Website;</li>
          <li>
            Stay connected with you: whether it be for providing customer
            service or notifying you of new features or updates to the Website;
            and
          </li>
          <li>
            Fulfill any other purpose for which the information was collected.
          </li>
        </ul>
        <p>
          We will never sell or rent your personal data to third parties. We may
          combine your information with information we collect from other
          companies and use it to improve and personalize the Website, as well
          as our content and advertising.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8">
          5. How we share your personal data
        </h2>
        <h3 className="text-xl font-semibold mt-4 mb-2 text-primary">
          Sharing with third parties
        </h3>
        <p>
          We may have to share your personal data with the parties set out below
          for the purposes set out in Section 4 above:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Legal advisors</strong> &ndash; If we believe that
            disclosure is reasonably necessary: (1) to comply with any
            applicable law, regulation, legal process or governmental request;
            (2) to establish, exercise or defend our legal rights; (3) to
            enforce or comply with our Terms and Conditions; or (4) to protect
            us, users of our Website or the public from harm, fraud, or
            potentially prohibited or illegal activities.
          </li>
          <li>
            <strong>Service Providers</strong> &ndash; The Company may provide
            your personal information to other companies who help us provide,
            maintain, and improve the Website.
          </li>
          <li>
            <strong>Professional advisers</strong> &ndash; In order to comply
            with our legal obligations, we may need to share information with
            professional advisers who provide consultancy, banking, compliance,
            insurance, or accounting services.
          </li>
          <li>
            <strong>Third parties</strong> &ndash; We may choose to sell,
            transfer, or merge parts of our business or our assets to third
            parties. Alternatively, we may acquire other businesses or merge
            with them. If a change happens to our business, then the new owners
            may use your personal data in the same way as set out in this
            privacy policy.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8">
          6. How we protect your personal data
        </h2>
        <p>
          We protect your information using technical and administrative
          security measures to reduce the risks of loss, misuse, unauthorized
          access, disclosure, and alteration. Data may be stored with a third
          party company, which may have firewalls and data encryption not
          managed by us. In addition, we limit access to your personal data to
          those employees, agents, contractors and other third parties who have
          a business need to know.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8">
          7. Children under the age of majority
        </h2>
        <p>
          The Website is not intended for children under the age of majority in
          the country they live (i.e. 18 years of age in the United States)
          (&quot;Minors&quot;), and we do not knowingly collect information from
          Minors without parental consent. If we learn we have collected or
          received personal information from a Minor without verification of
          parental consent, we will delete that information. If you believe we
          may have information from or about a Minor, please contact us at{" "}
          <a
            href="mailto:hello@geodework.com"
            className="text-primary underline"
          >
            hello@geodework.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8">
          8. California Privacy Rights
        </h2>
        <p>
          Residents of California may have additional rights regarding our use
          of your personal information. To learn more about your California
          privacy rights, visit this link here. California residents have rights
          to request a copy of personal information collected about them over
          the past 12 months. California residents will not be discriminated
          against because they choose to exercise rights under the California
          Consumer Privacy Act. If you request a copy of or deletion of your
          personal information, we may ask you to provide additional personal
          information to verify your identity before processing your request. We
          may still be required to keep certain information about you to comply
          with relevant law. To request additional information or submit a
          request under the California Consumer Privacy Act, contact us at{" "}
          <a
            href="mailto:hello@geodework.com"
            className="text-primary underline"
          >
            hello@geodework.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8">
          9. Data retention
        </h2>
        <p>
          We will only retain your personal data for as long as necessary to
          fulfil the purposes we collected it for, including for the purposes of
          satisfying any legal, accounting, or reporting requirements. To
          determine the appropriate retention period for personal data, we
          consider the amount, nature, and sensitivity of the personal data, the
          potential risk of harm from unauthorized use or disclosure of your
          personal data, the purposes for which we process your personal data
          and whether we can achieve those purposes through other means, and the
          applicable legal requirements. In some circumstances we may anonymize
          your personal data for research or statistical purposes in which case
          we may use this information indefinitely without further notice to
          you.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8">
          10. Contact Information
        </h2>
        <p>
          Please contact us with any questions, concerns, or feedback regarding
          this privacy policy by sending an email to{" "}
          <a
            href="mailto:hello@geodework.com"
            className="text-primary underline"
          >
            hello@geodework.com
          </a>
          .
        </p>
      </div>
    </div>
  )
}
