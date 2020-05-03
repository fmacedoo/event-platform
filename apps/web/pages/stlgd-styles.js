import Container from '@qrt/atoms/container';
import Typography, { H1, H2, H3, H4, H5, H6, Label, P, Span } from '@qrt/atoms/typography';

import { withLayout } from 'components/layout';

const TableStyles = {
    padding: '0.25rem 1rem',
    border: '0.1rem solid black',
    borderCollapse: 'collapse',
};

const Th = props => <th style={TableStyles} {...props} />;
const Td = props => <td style={TableStyles} {...props} />;

export function Page() {
    return (
        <Container>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '3rem' }}>
                <H3 text="Components" align="left" />
                <H1 text="<H1 />" />
                <H2 text="<H2 />" />
                <H3 text="<H3 />" />
                <H4 text="<H4 />" />
                <H5 text="<H5 />" />
                <H6 text="<H6 />" />
                <Span text="<Span />" />
                <Label text="<Label />" />
                <P text="<P />" />
                <Typography text="<Typography /> (Default)" />

                <br />
                <H3 text="Span's" align="left" />
                <br />
                <H4 text="Sizes" align="left" />

                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <table style={{ width: '33%' }}>
                        <tr>
                            <Th colspan={4}>Sizes in rem</Th>
                        </tr>
                        <tr>
                            <Th></Th>
                            <Th>
                                <strong>Desktop & Tablet</strong>
                            </Th>
                            <Th>
                                <strong>Mobile</strong>
                            </Th>
                            <Th>
                                <strong>Tags</strong>
                            </Th>
                        </tr>
                        <tr>
                            <Td>
                                <strong>4xl</strong>
                            </Td>
                            <Td>4</Td>
                            <Td>3</Td>
                            <Td>H1, Span</Td>
                        </tr>
                        <tr>
                            <Td>
                                <strong>3l</strong>
                            </Td>
                            <Td>3.5</Td>
                            <Td>2.2</Td>
                            <Td>H2, Span</Td>
                        </tr>
                        <tr>
                            <Td>
                                <strong>2xl</strong>
                            </Td>
                            <Td>2.6</Td>
                            <Td>2</Td>
                            <Td>H3, Span</Td>
                        </tr>
                        <tr>
                            <Td>
                                <strong>xl</strong>
                            </Td>
                            <Td>2.2</Td>
                            <Td>1.8</Td>
                            <Td>H4, Span</Td>
                        </tr>
                        <tr>
                            <Td>
                                <strong>l</strong>
                            </Td>
                            <Td>1.8</Td>
                            <Td>1.6</Td>
                            <Td>H5, Span, P</Td>
                        </tr>
                        <tr>
                            <Td>
                                <strong>m</strong>
                            </Td>
                            <Td>1.6</Td>
                            <Td>1.4</Td>
                            <Td>H6, Span, P</Td>
                        </tr>
                        <tr>
                            <Td>
                                <strong>s</strong>
                            </Td>
                            <Td>1.4</Td>
                            <Td>1.2</Td>
                            <Td>Label, Span</Td>
                        </tr>
                        <tr>
                            <Td>
                                <strong>xs</strong>
                            </Td>
                            <Td>1.2</Td>
                            <Td>1</Td>
                            <Td>Span</Td>
                        </tr>
                    </table>
                    <table style={{ width: '50%' }}>
                        <tr>
                            <Th colspan={6}>Supported fields and defaults</Th>
                        </tr>
                        <tr>
                            <Th></Th>
                            <Th>
                                <strong>Family</strong>
                            </Th>
                            <Th>
                                <strong>size</strong>
                            </Th>
                            <Th>
                                <strong>transform</strong>
                            </Th>
                            <Th>
                                <strong>align</strong>
                            </Th>
                            <Th>
                                <strong>color</strong>
                            </Th>
                        </tr>
                        <tr>
                            <Td>
                                <strong>H1</strong>
                            </Td>
                            <Td>bold, condensed</Td>
                            <Td>4xl</Td>
                            <Td>all (none)</Td>
                            <Td>all (center)</Td>
                            <Td>all (black)</Td>
                        </tr>
                        <tr>
                            <Td>
                                <strong>H2</strong>
                            </Td>
                            <Td>bold, condensed</Td>
                            <Td>3xl</Td>
                            <Td>all (none)</Td>
                            <Td>all (center)</Td>
                            <Td>all (black)</Td>
                        </tr>
                        <tr>
                            <Td>
                                <strong>H3</strong>
                            </Td>
                            <Td>bold, condensed</Td>
                            <Td>2xl</Td>
                            <Td>all (none)</Td>
                            <Td>all (center)</Td>
                            <Td>all (black)</Td>
                        </tr>
                        <tr>
                            <Td>
                                <strong>H4</strong>
                            </Td>
                            <Td>bold, condensed</Td>
                            <Td>xl</Td>
                            <Td>all (none)</Td>
                            <Td>all (center)</Td>
                            <Td>all (black)</Td>
                        </tr>
                        <tr>
                            <Td>
                                <strong>H5</strong>
                            </Td>
                            <Td>bold, condensed</Td>
                            <Td>l</Td>
                            <Td>all (none)</Td>
                            <Td>all (center)</Td>
                            <Td>all (black)</Td>
                        </tr>
                        <tr>
                            <Td>
                                <strong>H6</strong>
                            </Td>
                            <Td>bold, condensed</Td>
                            <Td>m</Td>
                            <Td>all (none)</Td>
                            <Td>all (center)</Td>
                            <Td>all (black)</Td>
                        </tr>
                        <tr>
                            <Td>
                                <strong>Span</strong>
                            </Td>
                            <Td>book, bold, condensed</Td>
                            <Td>All (m)</Td>
                            <Td>all (none)</Td>
                            <Td>all (left)</Td>
                            <Td>all (black)</Td>
                        </tr>
                        <tr>
                            <Td>
                                <strong>P</strong>
                            </Td>
                            <Td>book</Td>
                            <Td>l, (m)</Td>
                            <Td>none</Td>
                            <Td>all (left)</Td>
                            <Td>all (black)</Td>
                        </tr>
                        <tr>
                            <Td>
                                <strong>Label</strong>
                            </Td>
                            <Td>book</Td>
                            <Td>s</Td>
                            <Td>none</Td>
                            <Td>all (left)</Td>
                            <Td>all (black)</Td>
                        </tr>
                    </table>
                </div>

                <Span text="4xl" size="4xl" />
                <Span text="3xl" size="3xl" />
                <Span text="2xl" size="2xl" />
                <Span text="xl" size="xl" />
                <Span text="l" size="l" />
                <Span text="m" size="m" />
                <Span text="s" size="s" />
                <Span text="xs" size="xs" />

                <hr />
                <H4 text="Fonts" align="left" />
                <Span text="normal" font="normal" />
                <Span text="condensed" font="condensed" />
                <Span text="bold" font="bold" />
                <hr />
                <H4 text="Colors" align="left" />
                <Span text="white" color="white" />
                <Span text="black" color="black" />
                <Span text="gray" color="gray" />
                <hr />
                <H4 text="Align" align="left" />
                <Span text="center" align="center" />
                <Span text="left" align="left" />
                <hr />
                <H4 text="Transform" align="left" />
                <Span text="noNe" transform="none" />
                <Span text="uppercase" transform="uppercase" />
                <Span text="lowercase" transform="lowercase" />
                <Span text="" font="condensed" transform="lowercase">
                    lowercase not work with condensed
                </Span>
                <Span font="condensed" transform="uppercase">
                    uppercase not work with condensed
                </Span>
                <Span font="condensed" transform="none">
                    none not work with condensed
                </Span>
                <hr />
                <H4 text="Extra" align="left" />
                <Span text="underline" underline />
                <Span>simple children</Span>
                <Span>
                    children with <strong>bold</strong>
                </Span>
                <Span>
                    children with <em>emphasized</em>
                </Span>

                <hr />
                <H4 text="More Headings" align="left" />
                <H1 text="Heading with condensed" variant="h1" font="condensed" />
                <H1 text="Heading with transform" transform="lowercase" variant="h1" />

                <hr />
                <Typography text="Sizes" variant="h4" align="left" />
                <H1>children</H1>
                <H1 text="<H1 />" />
                <H2 text="<H2 />" />
                <H3 text="<H3 />" />
                <H4 text="<H4 />" />
                <H5 text="<H5 />" />
                <H6 text="<H6 />" />
                <P text="<P />" />
                <Span text="<Span />" />
                <Label text="<Label />" size="2xl" />
            </div>
        </Container>
    );
}

export default withLayout(Page);
