import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import styled from 'styled-components'
import TimelineCard from '../TimelineCard';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-top: 50px;
`

const Title = styled.h1`
    font-size: 5rem;
    font-weight: 700;
    color: #333;
    text-align: center;
    width: 100%;
    line-height: 1;
    margin-bottom: 1rem;

    @media (max-width: 1220px){
        font-size: 3.5rem;
    }
`

const TimelineWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

const Filmography = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <Title>
                    Leaving His Mark: The Films That Shaped Robert Downey Jr.'s Legacy
                </Title>
            </ContentWrapper>

            <TimelineWrapper>
                <Timeline position='alternate'>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <TimelineCard title="1970 | Pound" subtitle="Robert Downey Jr. begins his acting career at a young age, appearing alongside his father in this film."/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <TimelineCard title="1992 | Chaplin" subtitle="Robert Downey Jr. delivers a critically acclaimed performance as Charlie Chaplin, earning an Academy Award nomination for Best Actor."/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <TimelineCard title="1993 | Short Cuts" subtitle="He showcases his dramatic range in this critically acclaimed ensemble film."/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <TimelineCard title="2003 | The Singing Detective" subtitle="Robert Downey Jr. marks his comeback with this film, showcasing his comedic talent."/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <TimelineCard title="2005 | Kiss Kiss Bang Bang" subtitle="He further solidifies his comeback with a critically acclaimed performance in this action-comedy."/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <TimelineCard title="2005 | Kiss Kiss Bang Bang" subtitle="He further solidifies his comeback with a critically acclaimed performance in this action-comedy."/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <TimelineCard title="2008 | Iron Man" subtitle="Robert Downey Jr. takes on the role that defines his career: Iron Man in the Marvel Cinematic Universe. This film launches a global phenomenon."/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <TimelineCard title="2009 | Sherlock Holmes" subtitle="He demonstrates his versatility with a successful turn as Sherlock Holmes."/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <TimelineCard title="2012 | The Avengers" subtitle="Robert Downey Jr. reprises his role as Iron Man in this blockbuster superhero team-up film."/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <TimelineCard title="2014 | The Judge" subtitle="He delivers a powerful performance in this critically acclaimed drama."/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <TimelineCard title="2019 | Avengers: Endgame" subtitle="Robert Downey Jr. concludes his epic journey as Iron Man in this monumental film."/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <TimelineCard title="2020 | Dolittle" subtitle="Robert Downey Jr. takes on the voice role of the eccentric veterinarian Dr. Dolittle."/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <TimelineCard title='2022 | "Sr."' subtitle="He steps behind the camera for a documentary about his relationship with his filmmaker father, Robert Downey Sr."/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <TimelineCard title='2023 | Oppenheimer' subtitle="Robert Downey Jr. portrays Lewis Strauss, a powerful figure in the development of the atomic bomb, in this historical drama."/>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </TimelineWrapper>
        </Wrapper>
    )
}

export default Filmography