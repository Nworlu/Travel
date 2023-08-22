import React, { useEffect } from 'react'
import Header from '../../layout/Header'
import PrimaryButton from '../../components/button/PrimaryButton'
import user from '../../assets/user.png'
import tour from '../../assets/tour.png'
import travel from '../../assets/travel.png'
import pray from '../../assets/pray.png'
import med from '../../assets/med.png'
import ProductUsersComponent from '../../components/ui/ProductUsersComponent'
import CardItem from '../../components/ui/CardItem'
import main from '../../assets/main.jpeg'
import el1 from '../../assets/el1.jpeg'
import el2 from '../../assets/el2.jpeg'
import el3 from '../../assets/el3.jpeg'
import group7 from '../../assets/Group7.png'
import group12 from '../../assets/Group12.png'
import group11 from '../../assets/Group11.png'
import image50 from '../../assets/image50.png'
import london from '../../assets/london.png'
import rome from '../../assets/rome.png'
import india from '../../assets/india.png'
import france from '../../assets/france.png'
import hotel from '../../assets/hotel.png'
import road from '../../assets/road.png'
import plane from '../../assets/plane.png'
import line from '../../assets/Line-1.png'
import swit from '../../assets/swit.png'
import swizz from '../../assets/swizz.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faDirections,
  faLeaf,
  faLocationPin,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faHeart, faMap, faUser } from '@fortawesome/free-regular-svg-icons'

const HomePage = () => {
  useEffect(() => {
    document.title = 'Travel & Tour - Home'
  }, [])
  return (
    <>
      <Header>
        <h2 className='text-6xl font-bold w-1/2'>
          No matter where you’re going to, we’ll take you there
        </h2>
        <div
          className='rounded flex items-center backdrop-blur-sm py-4 px-1 w-fit pr-6 my-5'
          style={{
            // backgroundImage:`url(${'../'})`,
            backgroundColor: 'rgba(243, 243, 243, 0.60)',
            // backdropFilter: `blur(${'17.760618209838867px'})`,
          }}
        >
          <div className='mx-1 py-2 border-2 border-transparent border-r-white w-32 '>
            <input
              type='text'
              placeholder='Where to?'
              className='input text-center text-white bg-transparent w-full'
              style={{
                color: 'white',
                outline: 'none',
              }}
            />
          </div>
          <div className='mx-1 py-2 border-2 border-transparent border-r-white w-36 pr-3'>
            <select
              name=''
              id=''
              className='input text-center text-white bg-transparent w-full'
            >
              <option value=''>Travel Type</option>
            </select>
          </div>
          <div className='mx-1 py-2 w-36 pr-3'>
            <select
              name=''
              id=''
              className='input text-center text-white bg-transparent w-full'
            >
              <option value=''>Duration</option>
            </select>
          </div>
          <PrimaryButton otherStyle={'bg-[#DF6951]'}>Submit</PrimaryButton>
        </div>

        <div className='flex w-1/2 relative items-center mt-5 h-12'>
          {/* <div className='relative w-1/4 flex'> */}
          <img
            src={user}
            className='w-9 h-9 border-2 rounded-full absolute left-0'
            alt='user'
          />
          <img
            src={user}
            className='w-9 h-9 border-2 rounded-full absolute left-5'
            alt='user'
          />
          <img
            src={user}
            className='w-9 h-9 border-2 rounded-full absolute left-10'
            alt='user'
          />
          <img
            src={user}
            className='w-9 h-9 border-2 rounded-full absolute left-14 ml-1'
            alt='user'
          />
          <img
            src={user}
            className='w-9 h-9 border-2 rounded-full absolute left-20'
            alt='user'
          />
          <img
            src={user}
            className='w-9 h-9 border-2 rounded-full absolute left-24 ml-1'
            alt='user'
          />
          <div className='w-9 h-9 border-2 rounded-full bg-[#DF6951] absolute left-28 ml-2 '></div>
          {/* </div> */}
          <div className='absolute left-44'>
            <p className='text-xs'>
              2,500 people booked Tommorowland Event in last 24 hours
            </p>
          </div>
        </div>
      </Header>
      <ProductUsersComponent />
      <div className=''>
        <div className='flex flex-col items-center mx-36 mt-16'>
          <h6 className='text-[#DF6951] text-lg font-semibold mb-4'>
            CATEGORY
          </h6>
          <h2 className='text-[#181E4B] text-5xl font-bold'>
            We Offer Best Services
          </h2>
          <div className='flex items-center justify-between w-full mt-16'>
            <CardItem
              imgUri={tour}
              otherStyle='px-5 py-3 flex flex-col items-center w-52 h-64'
              className={'w-20 h-20'}
            >
              <div className='text-center mt-5'>
                <span className='text-xl text-[#1E1D4C] font-semibold'>
                  Guided Tours
                </span>
                <p className='text-xs mt-2 font-medium text-[#5E6282]'>
                  sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                </p>
              </div>
            </CardItem>
            <div className='relative z-50'>
              <CardItem
                style={{
                  boxShadow: `0px 1.8518518209457397px 3.1481480598449707px 0px rgba(0, 0, 0, 0.00), 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 0, 0, 0.01), 0px 64.81481170654297px 46.85185241699219px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)`,
                }}
                imgUri={travel}
                otherStyle='px-5 py-3 flex flex-col items-center rounded-3xl bg-white w-52 h-64'
                className={'w-20 h-20'}
              >
                <div className='text-center mt-5'>
                  <span className='text-xl text-[#1E1D4C] font-semibold'>
                    Best Flights Options
                  </span>
                  <p className='text-xs mt-2 font-medium text-[#5E6282]'>
                    sunt qui repellat saepe quo velit aperiam id aliquam
                    placeat.
                  </p>
                </div>
              </CardItem>
              <div className='absolute -bottom-10 -left-8 -z-50 bg-[#DF6951] w-20 h-20 rounded-bl-3xl rounded-tl-3xl rounded-br-3xl'></div>
            </div>
            <CardItem
              imgUri={pray}
              otherStyle='px-5 py-3 flex flex-col items-center w-52 h-64'
              className={'w-20 h-20'}
            >
              <div className='text-center mt-5'>
                <span className='text-xl text-[#1E1D4C] font-semibold'>
                  Religious Tours
                </span>
                <p className='text-xs mt-2 font-medium text-[#5E6282]'>
                  sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                </p>
              </div>
            </CardItem>
            <CardItem
              imgUri={med}
              otherStyle='px-5 py-3 flex flex-col items-center w-52 h-64'
              className={'w-20 h-20'}
            >
              <div className='text-center mt-5'>
                <span className='text-xl text-[#1E1D4C] font-semibold'>
                  Medical insurance
                </span>
                <p className='text-xs mt-2 font-medium text-[#5E6282]'>
                  sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                </p>
              </div>
            </CardItem>
          </div>
        </div>
        <div className='mt-32 w-full px-32 flex items-center justify-between'>
          <div className='relative h-full'>
            <span className='absolute text-5xl font-bold text-gray-300 -rotate-90 -left-64 bottom-52 mb-3'>
              Honeymoon Packages
            </span>
            <div className='box ml-4'>
              <img src={main} className='first' alt='' />
              <img
                src={el1}
                className='absolute w-36 h-36 object-cover rounded-full top-0 -right-10'
                alt=''
              />
              <img
                src={el3}
                className='absolute w-16 h-16 object-cover rounded-full -top-6 right-28'
                alt=''
              />
              <img
                src={el2}
                className='absolute w-24 h-24 object-cover rounded-full top-52 -right-28'
                alt=''
              />
            </div>
          </div>
          <div className='w-1/2'>
            <h6 className='text-[#DF6951] text-lg font-semibold mb-4 uppercase '>
              Honeymoon Specials
            </h6>
            <h2
              style={{ lineHeight: '1.2' }}
              className='text-[#181E4B] text-5xl font-bold leading-10'
            >
              Our Romantic Tropical Destinations
            </h2>
            <p className='text-sm my-5 leading-6'>
              Et labore harum non nobis ipsum eum molestias mollitia et corporis
              praesentium a laudantium internos. Non quis eius quo eligendi
              corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
              ducimus illum aut optio quibusdam!
            </p>
            <PrimaryButton otherStyle={'text-xs bg-[#DF6951]'}>
              View Packages
            </PrimaryButton>
          </div>
        </div>
        <div className='mt-32 w-full px-32 flex items-center relative'>
          <div className='w-1/2 relative z-20'>
            <h6 className='text-[#DF6951] text-lg font-semibold mb-4 uppercase '>
              Fast & Easy
            </h6>
            <h2
              style={{ lineHeight: '1.2' }}
              className='text-[#181E4B] text-5xl font-bold leading-10 w-5/6'
            >
              Get Your Favourite Resort Bookings
            </h2>
            <div className='mt-10'>
              <div className='flex items-center mb-5'>
                <img src={group7} alt='' className='mr-4' />
                <div>
                  <span className='text-[#5E6282] font-bold'>
                    Choose Destination
                  </span>
                  <p className='font-normal text-[#5E6282] w-80'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{' '}
                  </p>
                </div>
              </div>
              <div className='flex items-center mb-5'>
                <img src={group12} alt='' className='mr-4' />
                <div>
                  <span className='text-[#5E6282] font-bold'>
                    Check Availability
                  </span>
                  <p className='font-normal text-[#5E6282] w-80'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{' '}
                  </p>
                </div>
              </div>
              <div className='flex items-center mb-5'>
                <img src={group11} alt='' className='mr-4' />
                <div>
                  <span className='text-[#5E6282] font-bold'>Let’s Go</span>
                  <p className='font-normal text-[#5E6282] w-80'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='relative plane'>
            <CardItem
              otherStyle='p-3 relative rounded-3xl absolute w-80 bg-white z-20'
              style={{
                boxShadow: `0px 1.8518518209457397px 3.1481480598449707px 0px rgba(0, 0, 0, 0.00), 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 0, 0, 0.01), 0px 64.81481170654297px 46.85185241699219px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)`,
              }}
              imgUri={hotel}
            >
              <div className='mt-3'>
                <h4
                  className='
                font-medium text-lg'
                >
                  Trip to Hawaii{' '}
                </h4>
                <span
                  className='text-[#84829A]
                font-medium border border-white border-r-[#84829A] pr-1'
                >
                  14-29 June
                </span>{' '}
                <span
                  className='text-[#84829A]
                font-medium'
                >
                  by JR Martinax
                </span>
                <div className='my-5 mb-7'>
                  <FontAwesomeIcon
                    className='bg-[#F5F5F5] p-2 rounded-full text-[#84829A] mr-2'
                    icon={faLeaf}
                  />
                  <FontAwesomeIcon
                    className='bg-[#F5F5F5] p-2 rounded-full text-[#84829A] mr-2'
                    icon={faMap}
                  />
                  <FontAwesomeIcon
                    className='bg-[#F5F5F5] p-2 rounded-full text-[#84829A] mr-2'
                    icon={faDirections}
                  />
                </div>
                <div className='flex justify-between items-center my-3'>
                  <div className='flex items-center'>
                    <FontAwesomeIcon
                      className='mr-3 text-[#84829A]'
                      icon={faBuilding}
                    />
                    <p className='text-[#84829A] font-medium'>
                      60 people are interested
                    </p>
                  </div>
                  <FontAwesomeIcon className='text-[#DF6951]' icon={faHeart} />
                </div>
              </div>
              <CardItem
                otherStyle='flex items-start justify-stretch absolute -right-32 bottom-12 w-72 h-28 p-4 bg-white  rounded-3xl'
                imgUri={road}
                className='w-14 h-14 rounded-full'
                style={{
                  boxShadow: `0px 1.8518518209457397px 3.1481480598449707px 0px rgba(0, 0, 0, 0.00), 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 0, 0, 0.01), 0px 64.81481170654297px 46.85185241699219px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)`,
                }}
              >
                <div className='ml-3 w-full'>
                  <span className='text-[#84829A] font-medium'>Ongoing</span>
                  <p className='text-[#080809] font-medium'>Trip to rome</p>
                  <div>
                    <p className='text-[#080809] font-medium'>
                      <span className='text-[#DF6951]'>40% </span>
                      completed
                    </p>
                  </div>
                  <div className='w-40 bg-[#F5F5F5] h-1 mt-1 rounded-full'>
                    <div className='bg-[#DF6951] w-2/5 h-1 rounded-full'></div>
                  </div>
                </div>
              </CardItem>
            </CardItem>
          </div>
          <img src={plane} className='absolute z-0 -right-10 -top-28' alt='' />
        </div>
      </div>
      <div className='let flex items-center justify-start mt-32'>
        <div className='w-2/5 relative left-56'>
          <h4 className='text-white font-bold text-5xl capitalize'>
            Let’s make your
            <br /> next holiday amazing
          </h4>
          <img src={line} className='absolute right-7 w-60' alt='' />
        </div>
      </div>
      <div className='mt-32 w-full px-32 flex items-start justify-between relative'>
        <div className='w-1/2 relative -top-10'>
          <h6 className='text-[#DF6951] text-lg font-semibold mb-4 uppercase '>
            Promotion
          </h6>
          <h2 className='text-[#181E4B] text-5xl font-bold'>
            We Provide You Best Europe Sightseeing Tours
          </h2>
          <p className='text-sm my-5'>
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
          <PrimaryButton otherStyle={'text-xs bg-[#DF6951]'}>
            View Packages
          </PrimaryButton>
        </div>
        <div className=' h-full'>
          <span className='absolute text-5xl font-bold text-gray-300 -rotate-90 -right-36 bottom-52 mb-1'>
            Breath Taking Viewes
          </span>
          <div className='box2 '>
            <img src={image50} className='first' alt='' />
          </div>
          <div className='flex justify-start absolute left-32 bottom-10'>
            <div className='w-44 mr-16'>
              <img src={london} className='w-full' alt='' />
            </div>
            <div className='w-44 mr-16'>
              <img src={france} className='w-full' alt='' />
            </div>
            <div className='w-44 mr-16'>
              <img src={rome} className='w-full' alt='' />
            </div>
            <div className='w-44'>
              <img src={india} className='w-full' alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex h-96 mt-32'>
        <div className='pro flex flex-col items-center justify-center'>
          <div className='text-center text-white mb-8 relative'>
            <h4 className='text-lg font-bold uppercase'>Promotion</h4>
            <p className='font-bold text-5xl'>Explore Nature</p>
            <img src={line} className='w-28 absolute -right-5' alt='' />
          </div>
          <PrimaryButton
            otherStyle={'bg-transparent border border-white text-xs'}
          >
            View Packages
          </PrimaryButton>
        </div>
        <div className='pro flex flex-col items-center justify-center'>
          <div className='text-center text-white mb-8 relative'>
            <h4 className='text-lg font-bold uppercase'>Promotion</h4>
            <p className='font-bold text-5xl'>Explore Cities</p>
            <img src={line} className='w-28 absolute -right-5' alt='' />
          </div>
          <PrimaryButton
            otherStyle={'bg-transparent border border-white text-xs'}
          >
            View Packages
          </PrimaryButton>
        </div>
      </div>

      <div className='flex flex-col items-center mx-36 mt-16'>
        <h6 className='text-[#DF6951] text-lg font-semibold mb-4 uppercase'>
          trendy
        </h6>
        <h2 className='text-[#181E4B] text-5xl font-bold'>
          Our Trending Tour Packages
        </h2>
        <div className='flex items-center justify-between w-full mt-16'>
          <CardItem
            imgUri={swit}
            otherStyle='flex flex-col w-72 h-72 relative'
            // className={'w-20 h-20'}
          >
            <img src={swizz} className='w-24 h-24 absolute top-48' alt='' />
            <div className='mt-8'>
              <div className='flex items-center mb-3 text-[#7D7D7D]'>
                <div className='flex items-center'>
                  <FontAwesomeIcon icon={faCalendar} />
                  <span className='text-xs ml-2 text-[#7D7D7D]'>8 days</span>
                </div>
                <div className='flex items-center ml-6'>
                  <FontAwesomeIcon icon={faUser} />
                  <span className='text-xs ml-2 text-[#7D7D7D]'>
                    25 People going
                  </span>
                </div>
              </div>
              <div className='flex justify-between items-start w-full'>
                <div>
                  <h2 className='text-[#2F2F2F] font-bold text-xl'>
                    Switzerland
                  </h2>{' '}
                  <div className='flex items-center text-[#7D7D7D]'>
                    <FontAwesomeIcon icon={faLocationPin} className='mr-2' />
                    <p>Europe</p>
                  </div>
                </div>
                <div className='text-[#FFBA0A] text-xs'>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <div className='flex items-center mt-3'>
                <p className='text-xl mr-4 font-medium text-[#DF6951]'>
                  1,000 $
                </p>
                <p className='line-through text-[#7D7D7D] text-base font-medium'>
                  1,200 $
                </p>
              </div>
              <p className='text-xs font-normal mt-3'>
                Nam exercitationem commodi et ducimus quia in dolore animi sit
                mollitia amet id quod eligendi. Et labore harum non nobis ipsum
                eum molestias mollitia et corporis praesentium a laudantium
                internos.
              </p>
              <PrimaryButton otherStyle={'bg-[#DF6951] text-xs mt-6'}>
                Explore Now
              </PrimaryButton>
            </div>
          </CardItem>
          <CardItem
            imgUri={swit}
            otherStyle='flex flex-col w-72 h-72 relative'
            // className={'w-20 h-20'}
          >
            <img src={swizz} className='w-24 h-24 absolute top-48' alt='' />
            <div className='mt-8'>
              <div className='flex items-center mb-3 text-[#7D7D7D]'>
                <div className='flex items-center'>
                  <FontAwesomeIcon icon={faCalendar} />
                  <span className='text-xs ml-2 text-[#7D7D7D]'>8 days</span>
                </div>
                <div className='flex items-center ml-6'>
                  <FontAwesomeIcon icon={faUser} />
                  <span className='text-xs ml-2 text-[#7D7D7D]'>
                    25 People going
                  </span>
                </div>
              </div>
              <div className='flex justify-between items-start w-full'>
                <div>
                  <h2 className='text-[#2F2F2F] font-bold text-xl'>
                    Switzerland
                  </h2>{' '}
                  <div className='flex items-center text-[#7D7D7D]'>
                    <FontAwesomeIcon icon={faLocationPin} className='mr-2' />
                    <p>Europe</p>
                  </div>
                </div>
                <div className='text-[#FFBA0A] text-xs'>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <div className='flex items-center mt-3'>
                <p className='text-xl mr-4 font-medium text-[#DF6951]'>
                  1,000 $
                </p>
                <p className='line-through text-[#7D7D7D] text-base font-medium'>
                  1,200 $
                </p>
              </div>
              <p className='text-xs font-normal mt-3'>
                Nam exercitationem commodi et ducimus quia in dolore animi sit
                mollitia amet id quod eligendi. Et labore harum non nobis ipsum
                eum molestias mollitia et corporis praesentium a laudantium
                internos.
              </p>
              <PrimaryButton otherStyle={'bg-[#DF6951] text-xs mt-6'}>
                Explore Now
              </PrimaryButton>
            </div>
          </CardItem>
          <CardItem
            imgUri={swit}
            otherStyle='flex flex-col w-72 h-72 relative'
            // className={'w-20 h-20'}
          >
            <img src={swizz} className='w-24 h-24 absolute top-48' alt='' />
            <div className='mt-8'>
              <div className='flex items-center mb-3 text-[#7D7D7D]'>
                <div className='flex items-center'>
                  <FontAwesomeIcon icon={faCalendar} />
                  <span className='text-xs ml-2 text-[#7D7D7D]'>8 days</span>
                </div>
                <div className='flex items-center ml-6'>
                  <FontAwesomeIcon icon={faUser} />
                  <span className='text-xs ml-2 text-[#7D7D7D]'>
                    25 People going
                  </span>
                </div>
              </div>
              <div className='flex justify-between items-start w-full'>
                <div>
                  <h2 className='text-[#2F2F2F] font-bold text-xl'>
                    Switzerland
                  </h2>{' '}
                  <div className='flex items-center text-[#7D7D7D]'>
                    <FontAwesomeIcon icon={faLocationPin} className='mr-2' />
                    <p>Europe</p>
                  </div>
                </div>
                <div className='text-[#FFBA0A] text-xs'>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <div className='flex items-center mt-3'>
                <p className='text-xl mr-4 font-medium text-[#DF6951]'>
                  1,000 $
                </p>
                <p className='line-through text-[#7D7D7D] text-base font-medium'>
                  1,200 $
                </p>
              </div>
              <p className='text-xs font-normal mt-3'>
                Nam exercitationem commodi et ducimus quia in dolore animi sit
                mollitia amet id quod eligendi. Et labore harum non nobis ipsum
                eum molestias mollitia et corporis praesentium a laudantium
                internos.
              </p>
              <PrimaryButton otherStyle={'bg-[#DF6951] text-xs mt-6'}>
                Explore Now
              </PrimaryButton>
            </div>
          </CardItem>
        </div>
      </div>
    </>
  )
}

export default HomePage
