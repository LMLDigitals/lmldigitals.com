'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';
import Link from 'next/link';
import { useState, useTransition } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Resend } from 'resend';
import Ellipsis from './Loading';

const resend = new Resend('re_BgBx7kRn_CKYLNRTYvAfEt5FEYxV8DMUH');

type EmailInput = {
  name: string;
  phone: string;
  email: string;
  message: string;
  reason: string;
  newsletter: boolean;
};

export default function ContactForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setValue,
  } = useForm<EmailInput>();
  const [isPending, startTranisition] = useTransition();

  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const onSubmit: SubmitHandler<EmailInput> = (data) => {
    startTranisition(async () => {
      try {
        const res = await axios.post('/api/sendEmails', data);

        if (res.status === 200) {
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 6000); // Hide message after 6 seconds
          reset();
        }
      } catch (error) {
        console.error('Error sending email:', error);
        toast({
          title: 'Failed',
          description: 'Email has not sent',
        });
      }
    });
  };

  return (
    <div className="md:mx-20 flex flex-col xl:items-center lg:justify-center p-8 lg:flex-row mt-10 md:mt-0 lg:mt-20 xl:mt-16 2xl:mt-36">
      <div className="md:p-8 space-y-6 md:w-full lg:w-1/2">
        <div className="space-y-2">
          <p className="text-lg font-semibold">Get in touch</p>
          <div className="md:flex items-center gap-5">
            <h1 className="text-4xl font-bold">Hey there!</h1>
            <h2 className="text-4xl font-bold text-red-500">Let&apos;s chat</h2>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Interested in working with us?
          </h3>
          <p>
            Or have a general enquiry? Fill in the form today, and our team will
            be in touch shortly.
          </p>
          <h3 className="text-xl font-semibold">Hate Forms?</h3>
          <p>
            If you&apos;d prefer to email us directly, send a message to our{' '}
            <Link href="#" className="text-red-500">
              sales@lmldigitals.com
            </Link>
          </p>
          {/* <p>
                  UK -{' '}
                  <Link href='#' className='text-red-500'>
                     hello@thesocialshepherd.com
                  </Link>
               </p>
               <p>
                  North America -{' '}
                  <Link href='#' className='text-red-500'>
                     hi@thesocialshepherd.com
                  </Link>
               </p> */}
        </div>
      </div>
      <div className="mt-10 md:mt-0 p-8 bg-red-500/5 rounded-lg shadow-md md:w-full lg:w-2/5">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="relative">
              <UserIcon className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Name *"
                className="pl-10"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="relative">
              <PhoneIcon className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
              <Input
                type="number"
                placeholder="Phone *"
                className="pl-10"
                {...register('phone', {
                  required: 'Phone is required',
                })}
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>
          <div className="relative">
            <MailIcon className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
            <Input
              type="email"
              placeholder="Email Address *"
              className="pl-10"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          {/* <div>
            <p>Which region are you looking for support in?</p>
            <div className="flex flex-wrap gap-4 mt-5">
              {['North America', 'Europe', 'Africa'].map((region) => (
                <Button
                  key={region}
                  type="button"
                  variant="outline"
                  className={
                    selectedRegion === region ? 'bg-blue-500 text-white' : ''
                  }
                  onClick={() => {
                    setSelectedRegion(region);
                    setValue('region', region);
                  }}
                >
                  {region}
                </Button>
              ))}
              <input
                type="hidden"
                {...register('region', {
                  required: 'Region is required',
                })}
                value={selectedRegion}
              />
              {errors.region && (
                <p className="text-red-500">{errors.region.message}</p>
              )}
            </div>
          </div> */}
          <div className="relative">
            <Controller
              name="reason"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="reason" aria-label="Choose a reason">
                    <SelectValue placeholder="Choose a reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="digitalMarketing">
                      Digital Marketing
                    </SelectItem>
                    <SelectItem value="softwareDevelopment">
                      Software Development
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.reason && (
              <p className="text-red-500">{errors.reason.message}</p>
            )}
          </div>
          <div className="relative">
            <MessageCircleIcon className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
            <Textarea
              placeholder="Message *"
              className="pl-10"
              {...register('message', {
                required: 'Message is required',
              })}
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" {...register('newsletter')} />
            <label htmlFor="newsletter" className="text-sm">
              Do you want to be added to our weekly social insights newsletter?
            </label>
          </div>
          {/* <p className='text-xs'>
                  By submitting this form I accept the{' '}
                  <Link href='#' className='text-red-500'>
                     Privacy Policy
                  </Link>{' '}
                  of this site.
               </p> */}
          <Button type="submit" className="w-full">
            {isPending ? <Ellipsis /> : 'Send message'}
          </Button>
          {showSuccessMessage && (
            <p className="text-green-500 mt-2">
              Thanks, we will get back to you soon.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

function LightbulbIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MessageCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
