import React from 'react';
import icon1 from '.././images/icons/message.svg';
import icon2 from '.././images/icons/share.svg';

function ProductSection(props) {
  return (
    <footer class="flex flex-wrap flex-col lg:flex-row items-center p-4 border-t">
      <div class="w-full lg:w-auto lg:mr-6 text-center">© 2020 Xanadu</div>
      <div class="mx-auto my-4 lg:my-0 lg:ml-0">
      <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="/">Follow users</a>
      <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="/">Follow lists</a>
      <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="/">my feed</a>
      <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="/">my profile, settings</a>
      </div>
      <div className="mx-auto lg:mx-0 lg:ml-auto">
        <a className="inline-block mt-0 text-blue-900 hover:text-blue-700" href="/">FAQ</a>
        <a className="inline-block mt-0 ml-8 text-blue-900 hover:text-blue-700" href="/">Github</a>
        <a className="inline-block mt-0 ml-8 text-blue-900 hover:text-blue-700" href="/">Discord</a>
      </div>
      <div className="flex justify-center mt-4 lg:mt-0 lg:ml-8">
        <img className="w-6 h-6 mr-6" src={icon1} alt=""/>
        <img className="w-6 h-6" src={icon2} alt=""/>
      </div>
    </footer>
  );
}

export default ProductSection;
