import { describe, it } from '@jest/globals'
import { LaunchesTable } from '../../components/table/LaunchesTable'
import { dummyLaunchesData } from '../testHelper'
import { render } from '@testing-library/react'

describe('LaunchesTable', () => {
  it('should render table', async () => {
    const { getByText } = await render(
      <LaunchesTable
        currentPageLaunches={dummyLaunchesData}
        setSortRule={jest.fn()}
      />,
    )
    // render columns
    expect(getByText('id')).toBeInTheDocument()
    expect(getByText('Name')).toBeInTheDocument()
    expect(getByText('Date')).toBeInTheDocument()
    expect(getByText('Succeeded')).toBeInTheDocument()
    expect(getByText('Details')).toBeInTheDocument()
    expect(getByText('Image')).toBeInTheDocument()
    expect(getByText('Youtube Link')).toBeInTheDocument()

    // render all rows on current page
    expect(getByText('FalconSat')).toBeInTheDocument()
    expect(getByText('DemoSat')).toBeInTheDocument()
    expect(getByText('Trailblazer')).toBeInTheDocument()
    expect(getByText('RatSat')).toBeInTheDocument()
    expect(getByText('RazakSat')).toBeInTheDocument()
  })
})
