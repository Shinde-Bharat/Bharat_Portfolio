'use client'

import { useState, useCallback, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { FiExternalLink, FiAlertCircle, FiMoon, FiSun, FiGithub, FiStar } from 'react-icons/fi'
import { GoRepoForked } from "react-icons/go";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Skeleton } from '@/components/ui/skeleton'

interface Repo {
    id: number
    name: string
    description: string | null
    html_url: string
    created_at: string
    homepage: string | null
    stargazers_count: number
    forks_count: number
}

export function GithubReposSlider() {
    const [repos, setRepos] = useState<Repo[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [currentPage, setCurrentPage] = useState(0)
    const [showSlider, setShowSlider] = useState(false)
    const reposPerPage = 5
    const username = 'Shinde-Bharat' // Hardcoded username

    const fetchRepos = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
            if (!response.ok) {
                throw new Error('Failed to fetch repositories')
            }
            const data: Repo[] = await response.json()
            const sortedRepos = data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
            const reposWithDescription = sortedRepos.filter(repo => repo.description !== null)
            const reposWithoutDescription = sortedRepos.filter(repo => repo.description === null)
            setRepos([...reposWithDescription, ...reposWithoutDescription])
            setShowSlider(true)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred')
        } finally {
            setLoading(false)
        }
    }, [])

    const totalPages = Math.ceil((repos?.length || 0) / reposPerPage)
    const currentRepos = repos?.slice(currentPage * reposPerPage, (currentPage + 1) * reposPerPage) || []

    useEffect(() => {
        // Reset current page when repos change
        setCurrentPage(0)
    }, [repos])

    return (
        <div className="w-full max-w-4xl mx-4 md:mx-auto mt-14 md:mt-4 lg:mt-0 px-4">

            <div className="mb-4 flex items-center justify-center">
                {
                    repos?.length ? <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-center">Projects directly fetched from <span className='text-green-600'>Github</span> </h2>
                    </div> : <Button onClick={fetchRepos} variant={'secondary'} disabled={loading}>
                        {loading ? 'Fetching...' : 'Fetch More GitHub Projects'}
                    </Button>
                }

            </div>
            {error && <div className="text-center text-red-500 mb-4">Error: {error}</div>}
            {showSlider && (
                <>
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[...Array(5)].map((_, index) => (
                                <Card key={index} className="w-full max-w-[250px] ">
                                    <CardHeader>
                                        <Skeleton className="h-4 w-[80%]" />
                                    </CardHeader>
                                    <CardContent>
                                        <Skeleton className="h-4 w-full mb-2" />
                                        <Skeleton className="h-4 w-[60%]" />
                                    </CardContent>
                                    <CardFooter>
                                        <Skeleton className="h-8 w-full" />
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <>
                            <Carousel className="w-full">
                                <CarouselContent className="-ml-2 md:-ml-4">
                                    {currentRepos.map((repo) => (
                                        <CarouselItem key={repo.id} className="pl-2 md:pl-4 basis-full md:basis-1/3">
                                            <Card className="h-full flex flex-col">
                                                <CardHeader>
                                                    <CardTitle className="text-lg truncate text-[#4493F8] hover:underline hover:decoration-2">
                                                        <a href="" target='_blank' rel="noopener noreferrer " className="text-lg truncate text-[#4493F8] hover:underline hover:decoration-2" >{repo.name}</a>
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="flex-grow">
                                                    {repo.description ? (
                                                        <TooltipProvider>
                                                            <Tooltip>
                                                                <TooltipTrigger asChild>
                                                                    <CardDescription className="line-clamp-2">
                                                                        {repo.description}
                                                                    </CardDescription>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="max-w-xs">{repo.description}</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    ) : (
                                                        <CardDescription className="flex items-center text-yellow-500">
                                                            <FiAlertCircle className="w-4 h-4 mr-2" />
                                                            No description available
                                                        </CardDescription>
                                                    )}
                                                </CardContent>
                                                <CardFooter>

                                                    <div className="flex gap-3">
                                                        {
                                                            repo.html_url && <a href={repo.html_url} target='_blank' rel="noopener noreferrer" className="flex justify-center items-center text-purple hover:text-white" >
                                                                <p className="flex lg:text-md md:text-xs text-sm ">
                                                                    Code
                                                                </p>
                                                                <FiGithub className="ms-1 hidden md:flex" />
                                                            </a>
                                                        }

                                                        {repo.homepage && <a href={repo.homepage} target='_blank' rel="noopener noreferrer" className="flex justify-center items-center text-purple hover:text-white" >
                                                            <p className="flex lg:text-md md:text-xs text-sm ">
                                                                Try it
                                                            </p>
                                                            <FiExternalLink className="ms-1 hidden md:flex" />
                                                        </a>}

                                                        <div className="flex">
                                                            <p className="flex lg:text-md md:text-xs text-sm text-purple ">
                                                                {repo.stargazers_count}
                                                            </p>
                                                            <FiStar className="ms-1 hidden md:flex text-purple " />
                                                        </div>
                                                        <div className="flex">
                                                            <p className="flex lg:text-md md:text-xs text-sm 
                                                            text-purple ">
                                                                {repo.forks_count}
                                                            </p>
                                                            <GoRepoForked className="ms-1 hidden md:flex text-purple " />
                                                        </div>

                                                    </div>
                                                </CardFooter>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                            {repos.length > 0 && (
                                <div className="flex justify-center items-center mt-4">
                                    <Button
                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                                        disabled={currentPage === 0}
                                        variant={'secondary'}
                                    >
                                        Previous
                                    </Button>
                                    <span className="mx-4">
                                        Page {currentPage + 1} of {totalPages}
                                    </span>
                                    <Button
                                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                                        disabled={currentPage === totalPages - 1}
                                        variant={'secondary'}
                                    >
                                        Next
                                    </Button>
                                </div>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    )
}

