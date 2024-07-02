import { describe, expect } from '@jest/globals'
import { LaunchesTable } from '../../components/table/LaunchesTable'
import { dummyLaunchesData } from '../testHelper'
import { render } from '@testing-library/react'

describe('LaunchesTable', () => {
  test('should render all columns', async () => {
    const { getByText } = await render(
      <LaunchesTable
        currentPageLaunches={dummyLaunchesData}
        launchesData={dummyLaunchesData}
        setLaunchesData={jest.fn()}
      />,
    )
    expect(getByText('id')).toBeInTheDocument()
    expect(getByText('Name')).toBeInTheDocument()
    expect(getByText('Date')).toBeInTheDocument()
    expect(getByText('Succeeded')).toBeInTheDocument()
    expect(getByText('Details')).toBeInTheDocument()
    expect(getByText('Image')).toBeInTheDocument()
    expect(getByText('Youtube Link')).toBeInTheDocument()
  })
})
