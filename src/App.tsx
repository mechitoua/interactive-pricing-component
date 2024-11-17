import { Check } from 'lucide-react';
import { useState } from 'react';

const PAGEVIEW_TIERS = [
  { pageviews: '10K', price: 8 },
  { pageviews: '50K', price: 12 },
  { pageviews: '100K', price: 16 },
  { pageviews: '500K', price: 24 },
  { pageviews: '1M', price: 36 },
];

function App() {
  const [sliderValue, setSliderValue] = useState(2);
  const [isYearly, setIsYearly] = useState(false);

  const currentTier = PAGEVIEW_TIERS[sliderValue];
  const finalPrice = isYearly ? currentTier.price * 0.75 : currentTier.price;

  const sliderPercentage = (sliderValue / (PAGEVIEW_TIERS.length - 1)) * 100;

  return (
    <main>
      <div className="min-h-screen bg-[--very-pale-blue] bg-[url('/bg-pattern.svg')] bg-no-repeat bg-[length:100%_auto] bg-top flex flex-col items-center justify-center px-4 py-8">
        {/* Header */}
        <header className='text-center mb-20 relative -mt-20'>
          <div className="absolute -top-10 opacity-70 left-1/2 -translate-x-1/2 w-[146px] h-[145px] bg-[url('/pattern-circles.svg')]"></div>
          <h1 className='text-[--dark-blue] text-2xl md:text-3xl font-extrabold mb-2 relative'>
            Simple, traffic-based pricing
          </h1>
          <p className='text-[--grayish-blue] text-sm md:text-base'>
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </header>

        {/* Main Card */}
        <main className='w-full max-w-xl bg-white rounded-lg shadow-lg p-6 md:p-10'>
          {/* Price Display */}
          <div className='flex flex-col font-bold md:flex-row items-center justify-between mb-8'>
            <p className='text-[--grayish-blue] uppercase tracking-widest text-sm md:text-[1rem] mb-4 md:mb-0'>
              {currentTier.pageviews} Pageviews
            </p>
            <div className='flex items-center'>
              <span className='text-[--dark-blue] text-4xl md:text-[2.7rem] font-extrabold'>
                ${finalPrice.toFixed(2)}
              </span>
              <span className='text-[--grayish-blue] ml-2'>/ month</span>
            </div>
          </div>

          {/* Slider */}
          <div className='mb-8'>
            <div className='relative'>
              <div
                className='absolute h-2 bg-[--soft-cyan] rounded'
                style={{ width: `${sliderPercentage}%` }}
              />
              <input
                type='range'
                min='0'
                max={PAGEVIEW_TIERS.length - 1}
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className='w-full'
              />
            </div>
          </div>

          {/* Billing Toggle */}
          <div className='flex items-center justify-center gap-4 mb-8'>
            <span className='text-[--grayish-blue] text-sm'>
              Monthly Billing
            </span>
            <div
              className={`toggle-switch ${isYearly ? 'active' : ''}`}
              onClick={() => setIsYearly(!isYearly)}
            />
            <div className='flex items-center gap-2'>
              <span className='text-[--grayish-blue] text-sm'>
                Yearly Billing
              </span>
              <span className='text-[--light-red] bg-[--light-grayish-red] text-xs px-2 py-1 rounded-full'>
                -25% discount
              </span>
            </div>
          </div>

          <hr className='border-[--light-grayish-blue] mb-8' />

          {/* Features & CTA */}
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <ul className='space-y-3 mb-8 md:mb-0'>
              {[
                'Unlimited websites',
                '100% data ownership',
                'Email reports',
              ].map((feature) => (
                <li
                  key={feature}
                  className='flex items-center text-[--grayish-blue] text-sm'>
                  <Check className='w-4 h-4 text-[--strong-cyan] mr-2' />
                  {feature}
                </li>
              ))}
            </ul>
            <button className='bg-[--dark-blue] text-[--pale-blue] px-12 py-3 rounded-full hover:opacity-90 transition-opacity'>
              Start my trial
            </button>
          </div>
        </main>
      </div>
    </main>
  );
}

export default App;
