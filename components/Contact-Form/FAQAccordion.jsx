import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQAccordion = () => {
  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What are each of the subjects for?</span>
                <ChevronUpIcon
                  className={`${
                    open ? '' : 'rotate-180 transform'
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                General - General enquiries about my website. <br />
                Projects - Enquiries about my projects that are available on my website. <br />
                Personal Blog - Enquire about a post from my Personal blog. <br />
                Dev Blog - Enquire about a post from my Dev blog. <br />
                Travel Blog - Enquire about a post from my Travel blog. <br />
                Commissions - Either to enquire about your commission application or to enquire about commissions in general. <br />
                Web Template Store - Suggest a template to include or ask about the templates already included. <br />
                Dev Blog Sponsorship - To enquire about offering me a sponsorship to be included within my Dev blog posts. <br />
                Travel Blog Sponsorship - To enquire about offering me a sponsorship to be included within my Travel blog posts. <br />
                Other Sponsorship Opportunity - To enquire about offering me a sponsorship opportunity. <br />
                Opt Out of Social Media Marketing - To opt out of social media marketing for your commission. Please include your Unique Commission Application Number. <br />
                Bug/Other Issue - To contact me about a bug or issue you are experiencing on my website. <br />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>How else could I contact you?</span>
                <ChevronUpIcon
                  className={`${
                    open ? '' : 'rotate-180 transform'
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you would like to contact me about a subject that isn&apos;t included
                within the &rsquo;Subject&rsquo; combobox, you can either select
                &rsquo;General&rsquo; or contact me through contact@justcraigdev.com. 
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

export default FAQAccordion