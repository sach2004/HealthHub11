'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { useToast } from '@/components/ui/use-toast';

type Props = {
    dob: string;
    user_id: string;
};

export default function AuthComponent({ dob, user_id }: Props) {
    const [date, setDate] = React.useState<Date>();
    const [okay, setOkay] = React.useState<boolean>(false);

    const {toast} = useToast();

    return (
        <div className="pt-4 flex flex-col justify-center items-center">
            {!okay && (
                <div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={'outline'}
                                className={cn(
                                    'w-[280px] justify-start text-center font-normal ml-[90px]',
                                    !date && 'text-muted-foreground'
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? (
                                    format(date, 'PPP')
                                ) : (
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <Button
                        className="mt-4 w-full"
                        onClick={() => {
                            if (new Date(dob).getDate() == date?.getDate()) {
                                setOkay(true);
                            }
                            else {
                                toast({
                                    title: "Wrong Password",
                                    description: "Are you sure you're the right person?",
                                    duration: 5000,
                                })
                            }
                        }}
                    >
                        Submit
                    </Button>
                </div>
            )}
            {okay && (
                <div className="flex flex-row gap-x-20">
                    <Button className="mt-8 text-2xl p-5 py-8">
                        <a href="/auth">Go Back</a>
                    </Button>
                    <Button className="mt-8 bg-green-600 text-2xl p-5 py-8">
                        <a href={'/body/' + user_id}>Proceed</a>
                    </Button>
                </div>
            )}
        </div>
    );
}
